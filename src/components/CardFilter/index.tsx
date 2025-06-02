import * as S from './styles'

type Props = {
  ativo: boolean
  onClick: () => void
  title: string
  counter?: number
  subtitle?: string
}

const CardFilter = ({ ativo, onClick, title, counter, subtitle }: Props) => {
  return (
    <S.Card ativo={ativo} onClick={onClick}>
      <div>
        <S.Contador>{counter}</S.Contador>
        <S.Label>{title}</S.Label>
      </div>
      {subtitle && <S.Subtitulo>{subtitle}</S.Subtitulo>}
    </S.Card>
  )
}

export default CardFilter
