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
    str += `${key}=${value}${arr.length - 1 === index ? '' : '&'}`
    return str
  }, '');
}

export default class Api {
  get <P>(url: string, options: IOptions = {}): Promise<P> {
    const { data = {} } = options;
    const queryStr: string = queryStringify(data);
    let newUrl: string = url;

    if (queryStr.length > 0) {
      newUrl += `?${queryStr}`;
    }

    return this.request(newUrl, { ...options, method: EMethods.GET }, options.timeout);
  }

  post <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, { ...options, method: EMethods.POST }, options.timeout);
  }

  put <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, { ...options, method: EMethods.PUT }, options.timeout);
  }

  delete <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, { ...options, method: EMethods.DELETE }, options.timeout);
  }

  request<RequestT>(url: string, options: IRequestOptions, timeout = 5000): Promise<RequestT> {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers) {
        Object.keys(headers).forEach((headerKey) => {
          xhr.setRequestHeader(headerKey, String(headers[headerKey]));
        });
      }

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === EMethods.GET || !data) {
        xhr.send();
      } else {
        // @ts-ignore
        xhr.send(data);
      }
    });
  }
}
