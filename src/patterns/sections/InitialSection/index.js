import { useState } from 'react'

import HiddenMenu from '../../HiddenMenu'
import Header from '../../Header'

import { Container, Content } from './styles'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { SvgWave } from '../../../components/SvgWave'

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
      <h2>Desenvolvedora Web full-stack</h2>
      <button>
        Veja meu trabalho <AiOutlineArrowDown />
      </button>
    </Content>
    <SvgWave color='#efefef' />

  </Container>
}

export default InitialSection