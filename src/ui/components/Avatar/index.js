import Template from './Avatar.hbs'
import './styles.less'
import default_avatar from './assets/avatar-empty.png'

//** Аватар */
const Avatar = ({size = 'small', src = default_avatar}) => {
  return Template({size, src: src})
}

export default Avatar
