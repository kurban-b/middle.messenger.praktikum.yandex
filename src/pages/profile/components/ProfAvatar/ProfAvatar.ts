import './styles.less';
import Block from "../../../../utils/core/Block";

interface IProfAvatar {
  avatar: string
}

class ProfAvatar extends Block {
  constructor(props: IProfAvatar) {
    super({ ...props });
  }

  render(): string {
    //language=hbs
    return `
        <div class="profile_avatar__wrapper">
            <label class="profile_avatar" for="avatar">
                {{#if avatar}}
                    <img src="{{avatar}}" alt="аватар" />
                {{/if}}

                <div class="profile_avatar__hover">
                    Поменять аватар
                </div>
            </label>

            <input class="profile_avatar__file" type="file" id="avatar" name="avatar">
        </div>
    `
  }
}

export default ProfAvatar;
