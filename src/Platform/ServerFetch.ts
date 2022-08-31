import { Stream } from 'stream'


type BodyOptions = {
  size: number
}

type BodyInternal = {
  body: unknown,
  stream: Stream,
  disturbed: boolean,
  boundary: string[] | null,
  error: FetchError | null
}

class Body {
  public size: number
  public internal: BodyInternal

	constructor(
    body, 
    options: BodyOptions = {
      size: 0
    }
  ) {
		let boundary = null

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if (isURLSearchParameters(body)) {
			body = Buffer.from(body.toString())
		} else if (isBlob(body)) {
		} else if (Buffer.isBuffer(body)) {
		} else if (types.isAnyArrayBuffer(body)) {
			body = Buffer.from(body)
		} else if (ArrayBuffer.isView(body)) {
			body = Buffer.from(body.buffer, body.byteOffset, body.byteLength)
		} else if (body instanceof Stream) {

		} else if (body instanceof FormData) {
			body = formDataToBlob(body);
			boundary = body.type.split('=')[1]
		} else {
			body = Buffer.from(String(body))
		}

		let stream = body

		if (Buffer.isBuffer(body)) {
			stream = Stream.Readable.from(body);
		} else if (isBlob(body)) {
			stream = Stream.Readable.from(body.stream());
		}

		this.internal = {
			body,
			stream,
			boundary,
			disturbed: false,
			error: null
		}
		
    this.size = options.size

		if (body instanceof Stream) {
			body.on('error', e => {
				const error = e instanceof FetchBaseError 
          ? error 
          : new FetchError(
            `Invalid response body while trying to fetch ${this.url}: ${e.message}`, 
            'system', 
            e
          )
				
        this.internal.error = error
			})
		}
	}

	get body () {
		return this.internal.stream
	}

	get bodyUsed () {
		return this.internal.disturbed
	}

	async arrayBuffer () {
		const { buffer, byteOffset, byteLength } = await consumeBody(this)
		return buffer.slice(byteOffset, byteOffset + byteLength)
	}

	async formData() {
		const ct = this.headers.get('content-type');

		if (ct.startsWith('application/x-www-form-urlencoded')) {
			const formData = new FormData();
			const parameters = new URLSearchParams(await this.text());

			for (const [name, value] of parameters) {
				formData.append(name, value);
			}

			return formData;
		}

		const {toFormData} = await import('./utils/multipart-parser.js');
		return toFormData(this.body, ct);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this.internal.body && this.internal.body.type) || '';
		const buf = await this.arrayBuffer();

		return new Blob([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		const text = await this.text();
		return JSON.parse(text);
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return new TextDecoder().decode(buffer);
	}

	/**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */
	buffer() {
		return consumeBody(this);
	}
}

class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) { // eslint-disable-line no-eq-null, eqeqeq
			// No op
		} else if (typeof init === 'object' && !types.isBoxedPrimitive(init)) {
			const method = init[Symbol.iterator];
			// eslint-disable-next-line no-eq-null, eqeqeq
			if (method == null) {
				// Record<ByteString, ByteString>
				result.push(...Object.entries(init));
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// Sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				result = [...init]
					.map(pair => {
						if (
							typeof pair !== 'object' || types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object');
						}

						return [...pair];
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple');
						}

						return [...pair];
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined;

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						return name => {
							validateHeaderName(name);
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
		});
		/* c8 ignore next */
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			Reflect.apply(callback, thisArg, [this.get(name), name, this]);
		}
	}

	* values() {
		for (const name of this.keys()) {
			yield this.get(name);
		}
	}

	/**
	 * @type {() => IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			yield [name, this.get(name)];
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {});
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, {});
	}
}

type RequestOptions = {

}

type RequestInternal = {
  parsedURL,
  method,
  headers: Headers,
  redirect,
  referrer
}

class Request extends Body {
  public internal: RequestInternal

	constructor (input, init = {}) {
		let parsedURL;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(input)) {
			parsedURL = new URL(input.url);
		} else {
			parsedURL = new URL(input);
			input = {};
		}

		if (parsedURL.username !== '' || parsedURL.password !== '') {
			throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
		}

		let method = init.method || input.method || 'GET';
		if (/^(delete|get|head|options|post|put)$/i.test(method)) {
			method = method.toUpperCase();
		}

		if (!isRequest(init) && 'data' in init) {
			doBadDataWarn();
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if ((init.body != null || (isRequest(input) && input.body !== null)) &&
			(method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		const inputBody = init.body ?
			init.body :
			(isRequest(input) && input.body !== null ?
				clone(input) :
				null);

		super(inputBody, {
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody, this);
			if (contentType) {
				headers.set('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ?
			input.signal :
			null;
		if ('signal' in init) {
			signal = init.signal;
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

		// §5.4, Request constructor steps, step 15.1
		// eslint-disable-next-line no-eq-null, eqeqeq
		let referrer = init.referrer == null ? input.referrer : init.referrer;
		if (referrer === '') {
			// §5.4, Request constructor steps, step 15.2
			referrer = 'no-referrer';
		} else if (referrer) {
			// §5.4, Request constructor steps, step 15.3.1, 15.3.2
			const parsedReferrer = new URL(referrer);
			// §5.4, Request constructor steps, step 15.3.3, 15.3.4
			referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
		} else {
			referrer = undefined;
		}

		this.internal = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal,
			referrer
		};

		// Node-fetch-only options
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;

		// §5.4, Request constructor steps, step 16.
		// Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
		this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
	}

	get method() {
		return this.internal.method
	}

	get url () {
		return formatURL(this.internal.parsedURL)
	}

	get headers () {
		return this.internal.headers
	}

	get redirect () {
		return this.internal.redirect
	}

	/** @returns {AbortSignal} */
	get signal() {
		return this.internal.signal;
	}

	get referrer () {
		if (this.internal.referrer === 'no-referrer') {
			return '';
		}

		if (this.internal.referrer === 'client') {
			return 'about:client'
		}

		if (this.internal.referrer) {
			return this.internal.referrer.toString();
		}

		return undefined;
	}

	get referrerPolicy() {
		return this.internal.referrerPolicy;
	}

	set referrerPolicy(referrerPolicy) {
		this.internal.referrerPolicy = validateReferrerPolicy(referrerPolicy);
	}

	clone() {
		return new Request(this)
	}

	get [Symbol.toStringTag]() {
		return 'Request'
	}
}


export type ResponseBody = {

}

export type ResponseOptions = {

}

export default class Response extends Body {
	constructor(body = null, options = {}) {
		super(body, options)

		// eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
		const status = options.status != null ? options.status : 200;

		const headers = new Headers(options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this.internal = {
			type: 'default',
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter,
			highWaterMark: options.highWaterMark
		};
	}

	get type() {
		return this.internal.type;
	}

	get url() {
		return this.internal.url || '';
	}

	get status() {
		return this.internal.status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this.internal.status >= 200 && this.internal.status < 300;
	}

	get redirected() {
		return this.internal.counter > 0;
	}

	get statusText() {
		return this.internal.statusText;
	}

	get headers() {
		return this.internal.headers;
	}

	get highWaterMark() {
		return this.internal.highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response(clone(this, this.highWaterMark), {
			type: this.type,
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size,
			highWaterMark: this.highWaterMark
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!isRedirect(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	static error() {
		const response = new Response(null, {status: 0, statusText: ''});
		response.internal.type = 'error';
		return response;
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

class FetchBaseError extends Error {
  public type: string | null

	constructor (message: string, type?: string) {
		super(message)
		
		Error.captureStackTrace(this, this.constructor);

		this.type = type ?? null
	}

	get name() {
		return this.constructor.name
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name
	}
}

class FetchError extends FetchBaseError {
  public code: string | null = null
  public errno: string | null = null
  public syscall: string | null = null

	constructor (
    message: string, 
    type?: string, 
    systemError?: {
      code: string,
      syscall: string
    }
  ) {
		super (message, type)
		
		if (systemError) {
			this.code = this.errno = systemError.code
			this.syscall = systemError.syscall
		}
	}
}

function isBlob (object) {
	return (
		object &&
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		typeof object.stream === 'function' &&
		typeof object.constructor === 'function' &&
		/^(Blob|File)$/.test(object[NAME])
	)
}

function isURLSearchParameters (object) {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.has === 'function' &&
		typeof object.set === 'function' &&
		typeof object.sort === 'function'
	)
}

function isRequest (object) {
	return (
		typeof object === 'object' &&
		typeof object.internal === 'object'
	)
}

async function consumeBody (data) {
	if (data.internal.disturbed) {
		throw new TypeError(`body used already for: ${data.url}`)
	}

	data.internal.disturbed = true

	if (data.internal.error) {
		throw data.internal.error
	}

	const { body } = data

	if (body === null) {
		return Buffer.alloc(0)
	}

	if (!(body instanceof Stream)) {
		return Buffer.alloc(0)
	}

	const accum = []
	let accumBytes = 0


	try {
		for await (const chunk of body) {
			if (data.size > 0 && accumBytes + chunk.length > data.size) {
				const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
				body.destroy(error);
				throw error;
			}

			accumBytes += chunk.length;
			accum.push(chunk)
		}
	} catch (error) {
		const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
		throw error_;
	}

	if (body.readableEnded === true || body._readableState.ended === true) {
		try {
			if (accum.every(c => typeof c === 'string')) {
				return Buffer.from(accum.join(''));
			}

			return Buffer.concat(accum, accumBytes);
		} catch (e: any) {
			throw new FetchError(
        `Could not create Buffer from response body for ${data.url}: ${e.message}`, 
        'system', 
        e
      )
		}
	} else {
		throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`)
	}
}
