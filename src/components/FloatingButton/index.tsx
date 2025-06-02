import { BtnFloating } from './styles'

type Props = {
  onClick: () => void
}

const FloatingButton = ({ onClick }: Props) => {
  return <BtnFloating onClick={onClick}>+</BtnFloating>
}

export default FloatingButton
