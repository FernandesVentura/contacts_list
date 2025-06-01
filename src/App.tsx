import ContactsList from './containers/ContactsList'
import SideBar from './containers/SideBar'
import EstiloGlobal, { Container, ContainerCenter } from './styles'

function App() {
  return (
    <ContainerCenter>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ContactsList />
      </Container>
    </ContainerCenter>
  )
}

export default App
