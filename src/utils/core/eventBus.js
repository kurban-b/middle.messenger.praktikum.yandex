exports.__esModule = true;
exports.EventBus = void 0;
const EventBus = /** @class */ (function () {
  function EventBus() {
    this.listeners = {};
  }
  EventBus.prototype.on = function (event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  };
  EventBus.prototype.off = function (event, callback) {
    if (!this.listeners[event]) {
      throw new Event('\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F: '.concat(event));
    }
    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  };
  EventBus.prototype.emit = function (event) {
    const args = [];
    for (let _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!this.listeners[event]) {
      throw new Event('\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F: '.concat(event));
    }
    this.listeners[event].forEach((listener) => {
      listener.apply(void 0, args);
    });
  };
  return EventBus;
}());
exports.EventBus = EventBus;
