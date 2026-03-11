import './styles/global.css'
import './styles/theme.css'
import {Heading} from './components/heading';
import {Container} from './components/container'
import {Logo} from './components/logo'
import {Menu} from './components/menu'
export function App() {
  return (
    <>
    <Container>
      <Logo/>
    </Container>

    <Container>
      <Menu/>
    </Container>

      <Container>
        <Heading>Logo</Heading>
      </Container>
      
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}