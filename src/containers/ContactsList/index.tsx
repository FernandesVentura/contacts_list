import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ContactCard, { Contact } from '../../components/Contact'

type Props = {
  onEditContact: (contact: Contact) => void
}

const ContactsList = ({ onEditContact }: Props) => {
  const { list, filter } = useSelector((state: RootState) => state.contacts)

  const filtered =
    filter === 'All' ? list : list.filter((c) => c.category === filter)

  return (
    <main style={{ padding: 24 }}>
      <p style={{ marginBottom: 12 }}>Contats ({filtered.length})</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={onEditContact}
          />
        ))}
      </ul>
    </main>
  )
}

export default ContactsList
