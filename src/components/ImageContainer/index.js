import Image from 'next/image'
import { Container } from './styles'

function ImageContainer({ picture }) {
  return <Container>
    <div>
      <Image src={picture} alt={"adryane's picture"} id='img' />
    </div>
  </Container>
}

export default ImageContainer