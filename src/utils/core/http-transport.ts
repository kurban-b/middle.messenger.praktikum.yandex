enum EMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface IOptions {
  data?: Record<string, any>
  timeout?: number
  headers?: Record<string, any>
}

interface IRequestOptions extends IOptions {
  method: keyof typeof EMethods
}

function queryStringify(data: Record<string, any>): string {
  return Object.entries(data).reduce((str, [key, value], index, arr) => {
    str += `${key}=${value}${arr.length - 1 === index ? '' : '&'}`;
    return str;
  }, '');
}

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get<R = void>(url: string, options: IOptions = {}): Promise<R> {
    const { data = {} } = options;
    const queryStr: string = queryStringify(data);
    let newUrl: string = url;

    if (queryStr.length > 0) {
      newUrl += `?${queryStr}`;
    }

    return this.request(this.endpoint + newUrl, { ...options, method: EMethods.GET }, options.timeout);
  }

  post<R = void>(url: string, options: IOptions = {}): Promise<R> {
    return this.request(this.endpoint + url, { ...options, method: EMethods.POST }, options.timeout);
  }

  put<R = void>(url: string, options: IOptions = {}): Promise<R> {
    return this.request(this.endpoint + url, { ...options, method: EMethods.PUT }, options.timeout);
  }

  delete<R = void>(url: string, options: IOptions = {}): Promise<R> {
    return this.request(this.endpoint + url, { ...options, method: EMethods.DELETE }, options.timeout);
  }

  private request<RequestT>(url: string, options: IRequestOptions, timeout = 5000): Promise<RequestT> {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      if (headers) {
        Object.keys(headers).forEach((headerKey) => {
          xhr.setRequestHeader(headerKey, String(headers[headerKey]));
        });
      }

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === EMethods.GET || !data) {
        xhr.send();
      } else if (!(data instanceof FormData)) {
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send(data);
      }
    });
  }
}
