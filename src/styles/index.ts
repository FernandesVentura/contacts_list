import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: rgb(30, 30, 40);
    color: #f5f5f5;
  }

  button, input, select {
    font-family: inherit;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
  display: block;
`

export const ContainerCenter = styled.div`
  max-width: ;
  margin: 0 auto;
`

export default EstiloGlobal
