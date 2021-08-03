import { useState } from 'react'

import HiddenMenu from '../HiddenMenu'
import Header from '../Header'

import { Container, Content } from './styles'
import { AiOutlineArrowRight } from 'react-icons/ai'

function InitialSection() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openOrCloseMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return <Container>
    <Header openMenu={openOrCloseMenu} />
    <Content>
      {menuIsOpen && <HiddenMenu closeMenu={openOrCloseMenu} />}

      <h1>Olá, eu sou <span>Adryane Fernandes</span></h1>
      <h3>Desenvolvedora Web full-stack</h3>
      <button>Veja meu trabalho <AiOutlineArrowRight /></button>
    </Content>


    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efefef" fillOpacity="1" d="M0,96L80,133.3C160,171,320,245,480,229.3C640,213,800,107,960,85.3C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  </Container>
}

export default InitialSection