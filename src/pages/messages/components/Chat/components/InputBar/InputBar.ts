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
        <form class="input_bar__group" id="form-message">
            <div class="input_bar__add">
                <input type="file" name="file" id="file">

                <label for="file">
                    <img src="{{iconAdd}}" alt="" />
                </label>
            </div>

            <div class="input_bar__input">
                <label>
                    <input type="text" placeholder="Сообщение" name="message" id="message" />
                </label>
            </div>

            <div class="input_bar__button">
                <button type="submit">
                    <img src="{{iconBtn}}" alt="" />
                </button>
            </div>
        </form>
    `
  }
}

export default InputBar;
