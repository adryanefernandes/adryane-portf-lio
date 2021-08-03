import Link from '../../components/Link'

import { Container, Content, Option } from './styles'
import { AiOutlineClose } from 'react-icons/ai'

function HiddenMenu({ closeMenu }) {
  return (
    <Container>
      <button onClick={closeMenu}>
        <AiOutlineClose color='#efefef' size="2rem" />
      </button>

      <Content>
        <h1>Menu</h1>

        <Option>
          <Link href=''>Sobre mim</Link>
        </Option>
        <Option>
          <Link href=''>Conhecimentos</Link>
        </Option>
        <Option>
          <Link href=''>Educação</Link>
        </Option>
        <Option>
          <Link href=''>Projetos</Link>
        </Option>
        <Option>
          <Link href=''>Contato</Link>
        </Option>
      </Content>
    </Container>
  )
}

export default HiddenMenu