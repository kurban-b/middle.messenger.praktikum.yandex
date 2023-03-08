import { EventBus } from '../core/eventBus';
import set from '../helpers/set';
import { Store } from '../types/store';

interface Indexed extends Store {
  [key: string]: unknown
}

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
