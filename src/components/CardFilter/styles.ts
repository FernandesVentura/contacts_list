import styled from 'styled-components'

import { Props } from '.'

type PropsNoSubtitleNoCounter = Omit<Props, 'counter' | 'subtitle'>

export const Card = styled.div<PropsNoSubtitleNoCounter>`
  padding: 16px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#FFF')};
  background-color: ${(props) =>
    props.ativo ? 'rgb(78, 78, 100)' : 'rgb(38, 38, 48)'};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#FFF')};
  border-radius: 8px;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-block;
  margin-right: 16px;
`

export const Label = styled.span`
  font-size: 24px;
`
