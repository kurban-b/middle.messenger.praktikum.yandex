import isObject from "./isObject";

const isEqual = (a: Record<string, any>, b: Record<string, any>): boolean => {
  const res = {...a, ...b}

  return Object.keys(res).every((key: string) => {
    if (a[key] === b[key]) {
      return true
    } else {
      if (isObject(a[key]) && isObject(b[key])) {
        return isEqual(a[key], b[key])
      }

      if (Array.isArray(a[key]) && Array.isArray(b[key])) {
        if (a[key].length === b[key].length) {
          return a[key].every((el: unknown, i: number) => el === b[key][i])
        }

        return false
      }
    }
    return false
  })
}

export default isEqual
