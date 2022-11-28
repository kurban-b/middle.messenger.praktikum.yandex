import Template from './Button.hbs';
import './styles.less';

//* * Кнопка */
const Button = ({
  name = '',
  onClick,
  color = 'blue',
  radius = 'medium',
  block = false,
  view,
}) => Template({
  name, onclick: onClick, view, color, radius, block: block ? 'block' : '',
});

export default Button;
