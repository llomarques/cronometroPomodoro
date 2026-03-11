import './styles/global.css'
import './styles/theme.css'
import {Heading} from './components/heading';
import {Container} from './components/container'
import {Logo} from './components/logo'
import {Menu} from './components/menu'
import { CountDown } from './components/countdown';
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
      <CountDown/> 
      </Container>
      <Container>
        <form action="">
          <div>
            <label htmlFor="">task</label>
            <input id = "meuInput"type = "text" />
          </div>
          <div>
            linha verde 
          </div>
          <div>
            <p>ciclos</p>
          </div>
          <button> enviar</button>
        </form>
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