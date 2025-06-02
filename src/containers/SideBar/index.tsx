import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootState } from '../../redux/store'
import { setFilter, selectTagCounts } from '../../redux/contactsSlice'

const SideBar = () => {
  const dispatch = useDispatch()
  const active = useSelector((state: RootState) => state.contacts.filter)
  const counts = useSelector(selectTagCounts)

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

  return (
    <S.Aside>
      <div>
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
              onClick={() => dispatch(setFilter(cat))}
            />
          ))}
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default SideBar
