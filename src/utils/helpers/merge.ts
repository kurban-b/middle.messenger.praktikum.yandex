import isObject from "./isObject";

type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  Object.keys(rhs).forEach((key) => {
    try {
      if (isObject(rhs[key])) {
        rhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed)
      } else {
        lhs[key] = rhs[key]
      }
    } catch (err) {
      lhs[key] = rhs[key]
    }
  })

  return lhs;
}

export default merge
