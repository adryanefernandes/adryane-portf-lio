import { Container } from './styles'

function Button({ children, background, color }) {
  return (
    <Container background={background} color={color}>
      <button > {children} </button>
    </Container>
  )
}

export default Button