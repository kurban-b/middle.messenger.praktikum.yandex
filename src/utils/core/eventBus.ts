type TCallback = (...args: unknown[]) => void

export class EventBus {
  private listeners: {[key: string]: TCallback[]};

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TCallback): void {
    if(!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TCallback): void {
    if(!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => {
      return listener !== callback
    })
  }

  emit(event: string, ...args: unknown[]): void {
    if(!this.listeners[event]) {
      return
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    })
  }
}
