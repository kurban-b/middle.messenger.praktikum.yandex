import Template from './Chat.hbs';
import './styles.less';
import data from './data';
import Icon from './assets/icon__menu-bar.svg';

const Chat = () => Template({ name: 'Иванов Иван', messages: data.messages, icon: Icon });

export default Chat;
