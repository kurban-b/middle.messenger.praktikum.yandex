import store, {StoreEvents} from "./index";
import Block from "../core/Block";
import isEqual from "../helpers/isEqual";

function connect(mapStateToProps: (state: any) => any) {
  return function(Component: typeof Block) {
    return class extends Component {
      constructor(props: Record<string, any>) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super({...props, ...state});

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({...newState});
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    }
  }
}

export default connect
