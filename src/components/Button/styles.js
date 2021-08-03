import styled from 'styled-components'

export const Container = styled.div `
  button {
    background: ${props => props.background};
    color: ${props => props.color};
    border: none;
    font-size: 1.2rem;
    padding: .5rem 1.5rem;
    border-radius: 5rem;
    margin: .5rem 0;

    display: flex;
    align-items: center;

    p {
      margin-right: .5rem;
    }
  }
`