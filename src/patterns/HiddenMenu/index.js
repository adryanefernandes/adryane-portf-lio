import { Container, Content } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import MenuOption from '../../components/menuOption'

function HiddenMenu({ closeMenu }) {
  return (
    <Container>
      <button onClick={closeMenu}>
        <AiOutlineClose color='#efefef' size="2rem" />
      </button>

      <Content>
        <h1>Menu</h1>

        <MenuOption>
          Sobre mim
        </MenuOption>
        <MenuOption>
          Conhecimentos
        </MenuOption>
        <MenuOption>
          Educação
        </MenuOption>
        <MenuOption>
          Projetos
        </MenuOption>
        <MenuOption>
          Contato
        </MenuOption>
      </Content>
    </Container>
  )
}

export default HiddenMenu