import './styles/global.css'
import './styles/theme.css'
import {Heading} from './components/heading';
import {Container} from './components/container'
import {Logo} from './components/logo'
import {Menu} from './components/menu'
import { CountDown } from './components/countdown';
import {DefaultInput} from './components/defaultinput';
import {Cycles} from './components/cycles';
import{DefaultButton} from './components/defaultButton';
import { CirclePlay,CircleStop } from 'lucide-react';
import {Footer} from './components/footer';
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
            <input id = "meuInput"type = "text"
            placeholder='Digite Algo ' />
          </div>
          <div className="formRow">
            <DefaultInput labelText='task' id='meuInput' type='text' placeholder='oii'/>
          </div>
          <div className='formRow'>
            linha verde 
          </div>
          <div className='formRow'>
            <Cycles/>
          </div>

          <div className="formRow">
             <DefaultButton icon = {<CirclePlay/>}/>
              <DefaultButton icon = {<CircleStop/>}color='red'/>
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
      {/* <Container> </Container> */}

    {/* <Container> */}
      <Footer> olá do footer </Footer>
    {/* </Container> */}


    </>
  )
}