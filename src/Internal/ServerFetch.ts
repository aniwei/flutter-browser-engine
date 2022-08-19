/*
 * @Author: Aniwei
 * @Date: 2022-08-19 17:35:05
 */
const INTERNALS = Symbol('Request internals')


export class Body {
	constructor (body, {
		size = 0
	} = {}) {
		let boundary = null;

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if (isURLSearchParameters(body)) {
			// Body is a URLSearchParams
			body = Buffer.from(body.toString());
		} else if (isBlob(body)) {
			// Body is blob
		} else if (Buffer.isBuffer(body)) {
			// Body is Buffer
		} else if (types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			body = Buffer.from(body);
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
		} else if (body instanceof Stream) {
			// Body is stream
		} else if (body instanceof FormData) {
			// Body is FormData
			body = formDataToBlob(body);
			boundary = body.type.split('=')[1];
		} else {
			// None of the above
			// coerce to string then buffer
			body = Buffer.from(String(body));
		}

		let stream = body;

		if (Buffer.isBuffer(body)) {
			stream = Stream.Readable.from(body);
		} else if (isBlob(body)) {
			stream = Stream.Readable.from(body.stream());
		}

		this[INTERNALS] = {
			body,
			stream,
			boundary,
			disturbed: false,
			error: null
		};
		this.size = size;

		if (body instanceof Stream) {
			body.on('error', error_ => {
				const error = error_ instanceof FetchBaseError ?
					error_ :
					new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, 'system', error_);
				this[INTERNALS].error = error;
			});
		}
	}

	get body() {
		return this[INTERNALS].stream;
	}

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
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
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS].body && this[INTERNALS].body.type) || '';
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

export type HeadersOptions = {

}

export class Headers extends URLSearchParams {

	constructor (options: HeadersOptions) {
		let result: [][] = []
		if (options instanceof Headers) {
			const raw = options.raw()
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]))
			}
		} else if (options === null) {
			// No op
		} else if (typeof options === 'object' && !types.isBoxedPrimitive(options)) {
			const method = options[Symbol.iterator]

			if (method === null) {
				result.push(...Object.entries(init))
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable')
				}

				
				result = [...options].map(pair => {
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
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)')
		}

		result = result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined

		super(result)

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

	toString () {
		return Object.prototype.toString.call(this);
	}

	get (name: string) {
		const values = this.getAll(name)
		if (values.length === 0) {
			return null
		}

		let value = values.join(', ')
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase()
		}

		return value
	}

	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			Reflect.apply(callback, thisArg, [this.get(name), name, this]);
		}
	}

	async values () {
		for (const name of this.keys()) {
			await this.get(name)
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
		return this.entries()
	}

	
	raw () {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {})
	}

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


export type RequestOptions = {
  method?: string,
  body?: string,
  size?: number,
  headers: {}
}

export type RequestInput = {
  url: string,
  method?: string,
  body?: unknown
}

class Request extends Body {

  get method() {
		return this[INTERNALS].method;
	}

	/** @returns {string} */
	get url() {
		return formatUrl(this[INTERNALS].parsedURL);
	}

	/** @returns {Headers} */
	get headers() {
		return this[INTERNALS].headers;
	}

	get redirect() {
		return this[INTERNALS].redirect;
	}

	/** @returns {AbortSignal} */
	get signal() {
		return this[INTERNALS].signal;
	}

	// https://fetch.spec.whatwg.org/#dom-request-referrer
	get referrer() {
		if (this[INTERNALS].referrer === 'no-referrer') {
			return '';
		}

		if (this[INTERNALS].referrer === 'client') {
			return 'about:client';
		}

		if (this[INTERNALS].referrer) {
			return this[INTERNALS].referrer.toString();
		}

		return undefined;
	}

	get referrerPolicy() {
		return this[INTERNALS].referrerPolicy;
	}

	set referrerPolicy(referrerPolicy) {
		this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}

  constructor (
    input: string,  
    init: RequestInit
  )

  constructor (
    input: RequestInput,  
    init: RequestInit
  )

  constructor (
    input: unknown, 
    init: RequestInit = {}
  ) {
    let parsedURL

    if (typeof input === 'string') {
      input = {
        url: input
      }
    }

    input = input as RequestInput
    parsedURL = new URL((input as RequestInput).url)

		if (
      parsedURL.username !== '' || 
      parsedURL.password !== ''
    ) {
			throw new TypeError(`${parsedURL} is an url with embedded credentials.`)
		}

		let method = init.method || (input as RequestInput).method || 'GET'
		if (/^(delete|get|head|options|post|put)$/i.test(method)) {
			method = method.toUpperCase();
		}

		if (!isRequest(init) && 'data' in init) {
			doBadDataWarn()
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (
      (
        init.body !== null || 
        (isRequest(input) && (input as RequestInput).body !== null)
      ) && 
      ( method === 'GET' ||  method === 'HEAD')
    ) {
			throw new TypeError('Request with GET/HEAD method cannot have body')
		}

		const body = init.body ? init.body : (
      isRequest(input) && input.body !== null 
        ? clone(input) 
        : null
    )

    super(body, {
      size: init.size || input.size || 0
    })

    const headers = new Headers(init.headers || input.headers || {})

    if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body, this)
			
      if (contentType) {
				headers.set('Content-Type', contentType)
			}
		}

    let signal = isRequest(input) ? input.signal : null
		if ('signal' in init) {
			signal = init.signal
		}

		if (signal !== null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

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

		this[INTERNALS] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal,
			referrer
		};

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


}

export function fetch () {
  
}


/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} object
 * @return {boolean}
 */
 function isRequest (req: Request) {
	return (
		typeof req === 'object' &&
		typeof req[INTERNALS] === 'object'
	)
}