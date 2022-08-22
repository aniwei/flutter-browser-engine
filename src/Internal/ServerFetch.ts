/*
 * @Author: Aniwei
 * @Date: 2022-08-19 17:35:05
 */
import Stream from 'stream'
import types from 'util/types'
import { FormData, formDataToBlob } from 'formdata-polyfill'

type BodyInternal = {
  body: URLSearchParams | FormData | Buffer | string | ArrayBuffer | null,
  stream: Stream | null,
  boundary : boolean | null
  disturbed: boolean
  error: FetchError | null
}

export class Body {
  public url: string
  public size: number
  public headers: Headers
  public internal: BodyInternal

	constructor (
    body: URLSearchParams | FormData | Buffer | string | ArrayBuffer | null, 
    {
		  size = 0
	  } = {}
  ) {
		let boundary = null

		if (body === null) {
			body = null
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
			body = formDataToBlob(body)
			boundary = body.type.split('=')[1]
		} else {
			body = Buffer.from(String(body))
		}

		let stream: unknown = body

		if (Buffer.isBuffer(body)) {
			stream = Stream.Readable.from(body)
		} else if (isBlob(body)) {
			stream = Stream.Readable.from(body.stream())
		}

		this.internal = {
			body,
			stream,
			boundary,
			disturbed: false,
			error: null
		}

		this.size = size

		if (body instanceof Stream) {
			body.on('error', (err: FetchBaseError | Error) => {
				const error = err instanceof FetchBaseError ?
					err:
					new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, 'system', err);
				this.internal.error = error
			})
		}
	}

	get body() {
		return this.internal.stream
	}

	get bodyUsed() {
		return this.internal.disturbed
	}

	async arrayBuffer () {
		const { buffer, byteOffset, byteLength } = await consumeBody(this)
		return buffer.slice(byteOffset, byteOffset + byteLength)
	}

	async formData() {
		const contentType = this.headers.get('content-type') as string

		if (contentType && contentType.startsWith('application/x-www-form-urlencoded')) {
			const formData = new FormData()
			const parameters = new URLSearchParams(await this.text())

			for (const [name, value] of parameters) {
				formData.append(name, value)
			}

			return formData
		}

    // TODO
		// const { toFormData } = await import('./utils/multipart-parser.js')
		// return toFormData(this.body, ct);
	}

	async blob () {
		const ct = (this.headers && this.headers.get('content-type')) || (this.internal.body && this.internal.body.type) || ''
		const buf = await this.arrayBuffer()

		return new Blob([buf], {
			type: ct
		})
	}

	async json() {
		const text = await this.text()
		return JSON.parse(text)
	}

	async text() {
		const buffer = await consumeBody(this)
		return new TextDecoder().decode(buffer)
	}

	buffer() {
		return consumeBody(this)
	}
}

export type HeadersOptions = {

}

export class Headers extends URLSearchParams {

	constructor (options: HeadersOptions = {}) {
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
              typeof pair !== 'object' || 
              types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object')
						}

						return [...pair]
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple')
						}

						return [...pair]
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)')
		}

		result = result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name)
					validateHeaderValue(name, String(value))
					return [String(name).toLowerCase(), String(value)]
				}) :
				undefined

		super(result)

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
							)
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target,  p, receiver)
				}
			}
		});
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

export type RequestInternal = {
  method: string,
  referrer: string,
  parsedURL: string,
  referrerPolicy: string,
  signal,
  redirect,
  headers: Headers
}

class Request extends Body {
  public internal: RequestInternal

  get method() {
		return this.internal.method
	}

	get url () {
		return formatUrl(this.internal.parsedURL);
	}

	get headers() {
		return this.internal.headers;
	}

	get redirect() {
		return this.internal.redirect
	}

	get signal() {
		return this.internal.signal
	}

	get referrer() {
		if (this.internal.referrer === 'no-referrer') {
			return ''
		}

		if (this.internal.referrer === 'client') {
			return 'about:client'
		}

		if (this.internal.referrer) {
			return this.internal.referrer.toString()
		}
	}

	get referrerPolicy() {
		return this.internal.referrerPolicy
	}

	set referrerPolicy(referrerPolicy) {
		this.internal.referrerPolicy = validateReferrerPolicy(referrerPolicy);
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this)
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}

  constructor (
    input: string | Headers,  
    init?: RequestInit
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

		this.internal = {
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

class FetchBaseError extends Error {
  public type : string
	constructor (message, type) {
		super(message)
		
		Error.captureStackTrace(this, this.constructor)

		this.type = type
	}

	get name() {
		return this.constructor.name
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name
	}
}

type SystemError = Error & {
  code: string
  errno: string
  syscall: string
}

class FetchError extends FetchBaseError {
  public code: string | null = null
	public errno: string | null = null
  public syscall: string | null = null

	constructor (
    message: string, 
    type: string, 
    systemError: SystemError
  ) {
		super(message, type)
		
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = systemError.code
      this.errno = systemError.code
			this.syscall = systemError.syscall
		}
	}
}

async function consumeBody(data: Body) {
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

			accumBytes += chunk.length
			accum.push(chunk)
		}
	} catch (err) {
		const error_ = err instanceof FetchBaseError
      ? err 
      : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${err.message}`, 'system', err)
		throw error_;
	}

	if (
    body.readableEnded === true || 
    body._readableState.ended === true
  ) {
		try {
			if (accum.every(c => typeof c === 'string')) {
				return Buffer.from(accum.join(''));
			}

			return Buffer.concat(accum, accumBytes);
		} catch (error) {
			throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
		}
	} else {
		throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`)
	}
}

function validateHeaderName (name: string) {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const error = new TypeError(`Header name must be a valid HTTP token [${name}]`)
    Object.defineProperty(error, 'code', {
      value: 'ERR_INVALID_HTTP_TOKEN'
    })
    
    throw error
  }
}

function validateHeaderValue (
  name: string, 
  value: string
) {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const error = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(error, 'code', {value: 'ERR_INVALID_CHAR'})
    throw error
  }
}


function isBlob (object) {
	return (
		object &&
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		typeof object.stream === 'function' &&
		typeof object.constructor === 'function'
	)
}

function isURLSearchParameters (object: URLSearchParams) {
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

function isRequest (req: Request) {
	return (
		typeof req === 'object' &&
		typeof req.internal === 'object'
	)
}