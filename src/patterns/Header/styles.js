import styled from 'styled-components'

export const Container = styled.header`
  color:  #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 1rem;

  > p{
    font-size: 1.2rem;
  }

  > button{
    background: none;
    border: none;
    width: 2rem;
    height: 2rem;
  }
`