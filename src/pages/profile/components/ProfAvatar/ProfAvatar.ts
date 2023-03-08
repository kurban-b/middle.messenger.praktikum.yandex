import './styles.less';
import Block from '../../../../utils/core/Block';
import usersController from '../../../../controllers/UsersController';

interface IProfAvatar {
  avatar: string
}

class ProfAvatar extends Block {
  constructor(props: IProfAvatar) {
    super({
      onChange(e: InputEvent) {
        const target = e.target as HTMLInputElement;
        const file = target.files && target.files[0];
        const data = new FormData();

        if (file) {
          data.append('avatar', file);

          usersController.updateAvatar(data);
        }
      },
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="profile_avatar__wrapper">
            <label class="profile_avatar" for="avatar">
                {{#if avatar}}
                    <img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="аватар" />
                {{/if}}

                <div class="profile_avatar__hover">
                    Поменять аватар
                </div>
            </label>

            {{{Input
                    type="file"
                    id="avatar"
                    class="profile_avatar__file"
                    name="avatar"
                    onChange=onChange
                    accept="image/*"
            }}}
        </div>
    `;
  }
}

export default ProfAvatar;
