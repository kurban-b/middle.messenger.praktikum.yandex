const isObject = (target: any): boolean => {
  if (target instanceof Object) {
    return !(target instanceof Array || target instanceof Function)
  }
  return false
}

export default isObject
