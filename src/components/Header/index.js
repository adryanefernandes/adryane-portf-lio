import { Container } from "./styles"
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  return (
    <Container>
      <p>Adryane</p>
      <button>
        <AiOutlineMenu color='white' size='2rem'/>
      </button>
    </Container>
  )
}

export default Header