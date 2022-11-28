import Template from './Message.hbs';
import './styles.less';

const Message = ({
  type, text, date, isOutgoing, image,
}) => Template({
  type, text, date, isOutgoing, image,
});

export default Message;
