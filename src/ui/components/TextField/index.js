import Template from './TextField.hbs'
import './styles.less'

//** Инпут-текстовый */
const TextField = ({label, name, id, type = 'text', required=''}) => {
    return Template({type, label, name, id, required})
}

export default TextField
