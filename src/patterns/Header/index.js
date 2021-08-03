import { Container } from "./styles"
import { AiOutlineMenu } from 'react-icons/ai'

function Header({ openMenu }) {
  return (
    <Container>
      <p>Adryane</p>
      <button onClick={openMenu}>
        <AiOutlineMenu color='white' size='2rem' />
      </button>
    </Container>
  )
}

export default Header