import './styles.less';
import IconBtn from './assets/icon__arrow-right_circle.svg';
import IconAdd from './assets/icon__skrepka.svg';
import Block from "../../../../../../utils/core/Block";

interface IInputBar {
  iconAdd: string
  iconBtn: string
}

class InputBar extends Block {
  constructor(props: IInputBar) {
    super({
      iconAdd: IconAdd,
      iconBtn: IconBtn,
      ...props
    });
  }

  render() {
    //language=hbs
    return `
        <div class="input_bar__group">
            <div class="input_bar__add">
                <button>
                    <img src="{{iconAdd}}" alt="" />
                </button>
            </div>

            <div class="input_bar__input">
                <label>
                    <input type="text" placeholder="Сообщение" name="message" id="message" />
                </label>
            </div>

            <div class="input_bar__button">
                <button>
                    <img src="{{iconBtn}}" alt="" />
                </button>
            </div>
        </div>
    `
  }
}

export default InputBar;
