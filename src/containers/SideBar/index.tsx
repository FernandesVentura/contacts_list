import CardFilter from '../../components/CardFilter'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <CardFilter subtitle="Important" counter={1} />
        <CardFilter subtitle="Family" counter={2} />
        <CardFilter subtitle="Friends" counter={3} />
        <CardFilter subtitle="Work" counter={4} />
        <CardFilter subtitle="Neighbours" counter={5} />
        <CardFilter subtitle="SOS" counter={1} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default SideBar
