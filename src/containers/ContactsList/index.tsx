import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ContactCard, { Contact } from '../../components/Contact'

import { Content } from './styles'

type Props = {
  onEditContact: (contact: Contact) => void
}

const ContactsList = ({ onEditContact }: Props) => {
  const { list, filter } = useSelector((state: RootState) => state.contacts)

  const filtered =
    filter === 'All' ? list : list.filter((c) => c.category === filter)

  return (
    <Content>
      <p style={{ marginBottom: 12, textAlign: 'right' }}>
        Contats ({filtered.length})
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={onEditContact}
          />
        ))}
      </ul>
    </Content>
  )
}

export default ContactsList
