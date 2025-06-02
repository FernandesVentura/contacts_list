import styled from 'styled-components'

type PropsNoSubtitleNoCounter = {
  ativo: boolean
}

// Função para impedir que 'ativo' vá para o DOM
const shouldForwardProp = (prop: string) => prop !== 'ativo'

export const Card = styled('div').withConfig({
  shouldForwardProp
})<PropsNoSubtitleNoCounter>`
  padding: 16px 20px;
  border: 2px solid ${(props) => (props.ativo ? '#1e90ff' : '#444')};
  background-color: ${(props) =>
    props.ativo ? 'rgb(78, 78, 100)' : 'rgb(38, 38, 48)'};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#ccc')};
  border-radius: 12px;
  display: flex;
  align-items: center;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(70, 70, 90, 0.9);
  }

  flex-direction: column;
  gap: 8px;
  text-align: center;
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

export const Label = styled.span`
  font-size: 16px;
`

export const Subtitulo = styled.span`
  font-size: 14px;
  color: #aaa;
`
