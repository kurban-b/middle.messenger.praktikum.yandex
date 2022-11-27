import Template from './ProfInput.hbs'
import './styles.less'

const ProfInput = ({
                       text,
                       type = 'text',
                       id,
                       placeholder,
                       name,
                       value,
                       required=false,
                       disabled=false
}) => {
    return Template({
        text,
        id,
        type,
        placeholder,
        name,
        value,
        required: required ? "required" : "",
        disabled: disabled ? "disabled" : ""
    })
}

export default ProfInput