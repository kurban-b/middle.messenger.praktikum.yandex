import Template from './Contacts.hbs'
import './styles.less'

const Contacts = ({name, lastMessage, time, newCount}) => {
  return Template({name, lastMessage, time, newCount})
}

export default Contacts
