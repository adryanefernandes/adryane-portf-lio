import { Container } from './styles'
import InitialSection from '../../patterns/sections/InitialSection'
import AboutMe from '../../patterns/sections/AboutMe'

export default function Home() {
  return (
    <Container>
      <InitialSection />
      <AboutMe />
    </Container>
  )
}