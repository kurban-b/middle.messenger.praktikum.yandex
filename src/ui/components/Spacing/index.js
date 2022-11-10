import Template from './Spacing.hbs'
import './styles.less'

//** Отступ */
const Spacing = ({size = 'small'}) => {
    return Template({size})
}

export default Spacing