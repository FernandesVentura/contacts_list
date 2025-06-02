import * as S from './styles'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../redux/contactsSlice'

// Tipo separado
export type Contact = {
  id: string
  name: string
  phone: string
  email: string
  category: string
}

type Props = {
  contact: Contact
  onEdit: (contact: Contact) => void
}

const ContactCard = ({ contact, onEdit }: Props) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    if (confirm(`Deseja remover ${contact.name}?`)) {
      dispatch(removeContact(contact.id))
    }
  }

  return (
    <S.Card>
      <div>
        <S.ContactName>{contact.name}</S.ContactName>
        <S.Tag>{contact.category}</S.Tag>
      </div>

      <S.RightColumn>
        <S.InfoText>{contact.phone}</S.InfoText>
        <S.InfoText>{contact.email}</S.InfoText>
        <S.ActionBar>
          <a href={`tel:${contact.phone}`}>
            <S.BtnButton>Call</S.BtnButton>
          </a>
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.BtnButton>E-mail</S.BtnButton>
          </a>
          <S.BtnButton onClick={() => onEdit(contact)}>Editar</S.BtnButton>
          <S.BtnButton onClick={handleRemove}>Remover</S.BtnButton>
        </S.ActionBar>
      </S.RightColumn>
    </S.Card>
  )
}

export default ContactCard
