enum METHODS {
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

function queryStringify(data: Record<string, any>): string {
  return Object.entries(data).reduce((str, [key, value], index, arr) => {
    return str += `${key}=${value}` + (arr.length - 1 === index ? "" : "&")
  }, "")
}

export default class Api {
  get <P>(url: string, options: IOptions = {} ): Promise<P> {
    const { data = {} } = options
    const queryStr: string = queryStringify(data)
    let newUrl: string = url

    if (queryStr.length > 0) {
      newUrl += `?${queryStr}`
    }

    return this.request(newUrl, {...options, method: METHODS.GET}, options.timeout);
  };

  post <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete <P>(url: string, options: IOptions = {}): Promise<P> {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request<RequestT> (url, options, timeout = 5000): Promise<RequestT> {
    const { method, headers, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      if (headers) {
        Object.keys(headers).forEach((headerKey) => {
          xhr.setRequestHeader(headerKey, String(headers[headerKey]))
        })
      }

      xhr.timeout = timeout

      xhr.onload = function() {
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
