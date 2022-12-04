/** Функция возваращает прокси, который блокирует свойства и методы начинающие с _ */
export const getProxyDisabledKeys_ = (element: object): object => {
  return new Proxy(element, {
    get(target, prop) {
      if(typeof prop === "string" && prop?.startsWith('_')) {
        throw new Error("Нет прав");
      } else {
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      }
    },
    set(target, prop, value) {
      if (typeof prop === "string" && prop.startsWith('_')) {
        throw new Error("Нет прав");
      } else {
        target[prop] = value;
        return true;
      }
    },
    deleteProperty(target, prop) {
      if (typeof prop === "string" && prop.startsWith('_')) {
        throw new Error("Нет прав");
      } else {
        delete target[prop];
        return true;
      }
    },
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
}
