import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../../redux/contactsSlice'

import {
  Overlay,
  FormContainer,
  Input,
  Select,
  Button,
  CancelButton
} from './styles' // ajuste o caminho se necessário

import { Contact } from '../../components/Contact' // importe tipo Contact correto

type Props = {
  onClose: () => void
  contact?: Contact | null
}

const ContactForm = ({ onClose, contact }: Props) => {
  const dispatch = useDispatch()

  // Se vier contato, inicializa com ele; senão vazio
  const [name, setName] = useState(contact?.name || '')
  const [email, setEmail] = useState(contact?.email || '')
  const [phone, setPhone] = useState(contact?.phone || '')
  const [category, setCategory] = useState(contact?.category || 'Family')

  // Se o contato mudar, atualiza os estados (útil para editar contatos diferentes seguidamente)
  useEffect(() => {
    setName(contact?.name || '')
    setEmail(contact?.email || '')
    setPhone(contact?.phone || '')
    setCategory(contact?.category || 'Family')
  }, [contact])

  const isEditing = Boolean(contact)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      dispatch(
        editContact({
          id: contact!.id,
          name,
          email,
          phone,
          category
        })
      )
    } else {
      dispatch(
        addContact({
          id: String(Date.now()),
          name,
          email,
          phone,
          category
        })
      )
    }

    onClose()
  }

  // Fecha modal se clicar no fundo
  const handleOverlayClick = () => {
    onClose()
  }

  // Previne fechamento se clicar dentro do formulário
  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <FormContainer onClick={handleFormClick}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="nome"
            name="nome"
            autoComplete="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            id="telefone"
            name="telefone"
            autoComplete="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Select
            id="categoria"
            name="categoria"
            autoComplete="off"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Work">Work</option>
            <option value="Neighbours">Neighbours</option>
            <option value="Important">Important</option>
            <option value="SOS">SOS</option>
          </Select>
          <Button type="submit">{isEditing ? 'Atualizar' : 'Salvar'}</Button>
          <CancelButton type="button" onClick={onClose}>
            Cancelar
          </CancelButton>
        </form>
      </FormContainer>
    </Overlay>
  )
}

export default ContactForm
