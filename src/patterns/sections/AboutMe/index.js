import SectionTitle from '../../../components/SectionTitle'
import picture from '../../../assets/MyPicture.jpg'
import ImageContainer from '../../../components/ImageContainer'
import Button from '../../../components/Button'
import { SvgWave } from '../../../components/SvgWave'

import Link from 'next/link'
import { AiFillFilePdf } from 'react-icons/ai'

import { Container, Text, Content, ContainerLink } from './styles'

function AboutMe() {
  return (
    <Container>
      <Content>
        <SectionTitle>
          Sobre mim
        </SectionTitle>
        <ImageContainer
          picture={picture}
        />

        <Text>
          <p>{'Olá, como já deve ter lido em algum canto deste site, me chamo Adryane. Tenho 21 anos e moro no Rio de Janeiro/RJ. Sou apaixonada por tecnologia, conhecimento e universo Marvel.'}</p>

          <p>{'Curso análise e desenvolvimento de sistemas pela UEZO, e conclui um bootcamp em "Desenvolvedor web full stack" em julho de 2021, onde passei 8h diárias durante 6 meses estudando e treinando sobre técnologias como: JavaScript e NodeJs. Desde então estou me aprofundando nos assuntos já passados, e conhecendo outros como o framework NextJs.'}</p>
        </Text>

        <ContainerLink>
          <Link href=''>Vamos fazer algo incrível juntos?</Link>
        </ContainerLink>

        <Button
          background='#d1345b'
          color='#efefef'
        >
          <p> CV em PDF</p> <AiFillFilePdf />
        </Button>
      </Content>

      <SvgWave
        color={'#d1345b'}
      />
    </Container>
  )
}

export default AboutMe