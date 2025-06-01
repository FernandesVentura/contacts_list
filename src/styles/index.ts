import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "WDXL Lubrifont TC", Roboto;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`

export const ContainerCenter = styled.div`
  margin: 0 auto;
`

export default EstiloGlobal
