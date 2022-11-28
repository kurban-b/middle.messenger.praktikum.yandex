import Template from './InputBar.hbs';
import './styles.less';
import IconBtn from './assets/icon__arrow-right_circle.svg';
import IconAdd from './assets/icon__skrepka.svg';

const InputBar = () => Template({ iconAdd: IconAdd, iconBtn: IconBtn });

export default InputBar;
