import { useState } from 'react'
import ContactsList from './containers/ContactsList'
import SideBar from './containers/SideBar'
import EstiloGlobal, { Container, ContainerCenter } from './styles'
import FloatingButton from './components/FloatingButton'
import ContactForm from './components/ContactForm'
import { Contact } from './components/Contact'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)

  return (
    <ContainerCenter>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ContactsList
          onEditContact={(contact) => {
            setEditingContact(contact)
            setShowForm(true)
          }}
        />
      </Container>

      <FloatingButton
        onClick={() => {
          setEditingContact(null) // Novo contato
          setShowForm(true)
        }}
      />

      {showForm && (
        <ContactForm
          contact={editingContact}
          onClose={() => {
            setShowForm(false)
            setEditingContact(null)
          }}
        />
      )}
    </ContainerCenter>
  )
}

export default App
