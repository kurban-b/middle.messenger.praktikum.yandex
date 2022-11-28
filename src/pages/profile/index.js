import profile from './profile.hbs';
import './styles.less';
import Icon from './assets/icon__arrow-left_circle.svg';
import ava from '../../../static/images/gomer.png';

export default () => profile({ iconBack: Icon, avatar: ava, name: 'Иванов Иван' });
