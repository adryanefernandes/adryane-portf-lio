import styled from 'styled-components'

export const Container = styled.section `
  min-height: 100vh;

  background: #efefef; 

  svg {
    position: relative;
    bottom: -1px;
  }
`
export const Content = styled.div `
  padding: 0 3rem;
`

export const Text = styled.div `

  p{
    font-size: 1.2rem;
    color: #070707;
    text-align: justify;
  }

  p:last-child{
    margin-top: 1rem;
  }
`

export const ContainerLink = styled.div `
  color: #3454d1;
  padding: 1rem 0;
`