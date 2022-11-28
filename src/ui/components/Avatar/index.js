import Template from './Avatar.hbs';
import './styles.less';
import defaultAvatar from './assets/avatar-empty.png';

//* * Аватар */
const Avatar = ({ size = 'small', src = defaultAvatar }) => Template({ size, src });

export default Avatar;
