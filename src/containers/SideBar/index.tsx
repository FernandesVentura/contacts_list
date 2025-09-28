import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootState } from '../../redux/store'
import { setFilter, selectTagCounts } from '../../redux/contactsSlice'

const SideBar = () => {
  const dispatch = useDispatch()
  const active = useSelector((state: RootState) => state.contacts.filter)
  const counts = useSelector(selectTagCounts)
  const [open, setOpen] = useState(true)

  // Lista de categorias incluindo 'Todos' para mostrar todos contatos
  const categorias = [
    'All',
    'Favorits',
    'Family',
    'Friends',
    'Work',
    'Neighbours',
    'SOS'
  ]

  const handleOverlayClick = () => setOpen(false)

  return (
    <>
      <S.Hamburguer onClick={() => setOpen(!open)}>☰</S.Hamburguer>
      {open && <S.Overlay onClick={handleOverlayClick} />}
      <S.Aside $open={open}>
        <S.Filtros>
          {categorias.map((cat) => (
            <CardFilter
              key={cat}
              title={cat}
              counter={
                cat === 'All'
                  ? Object.values(counts).reduce((a, b) => a + b, 0)
                  : counts[cat] || 0
              }
              ativo={active === cat}
              onClick={() => {
                dispatch(setFilter(cat))
                setOpen(false)
              }}
            />
          ))}
        </S.Filtros>
      </S.Aside>
    </>
  )
}

export default SideBar
