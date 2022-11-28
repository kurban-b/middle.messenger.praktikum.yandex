import messages from './messages.hbs';
import './styles.less';
import data from './data';
import Icon from './assets/icon__direction-right.svg';

export default () => messages({ contacts: data.contacts, icon: Icon });
