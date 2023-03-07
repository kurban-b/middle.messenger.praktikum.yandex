/** Возвращает search params из урла */
export const getSearchParams = (url: string): URLSearchParams => {
  const queries = url.replace(/.*(\?.*)/g, '$1')

  return new URLSearchParams(queries)
}

export const queryStringToObject = (url: string): Record<string, unknown> => {
  const params = getSearchParams(url)
  const obj = {}

  // eslint-disable-next-line no-restricted-syntax
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      // @ts-ignore
      obj[key.replace(/\[]$/g, '')] = params.getAll(key)
    } else {
      const value = params.get(key)
      const isValueArr = /\[]$/g.test(key)

      if (value) {
        // @ts-ignore
        obj[key.replace(/\[]$/g, '')] = isValueArr ? [value] : value
      }
    }
  }

  return obj
}
