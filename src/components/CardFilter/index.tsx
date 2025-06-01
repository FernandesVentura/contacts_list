import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter: number
  subtitle: string
}

const CardFilter = ({ ativo, counter, subtitle }: Props) => (
  <S.Card ativo={ativo}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{subtitle}</S.Label>
  </S.Card>
)

export default CardFilter
