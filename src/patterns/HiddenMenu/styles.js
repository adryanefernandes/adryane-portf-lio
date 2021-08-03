import styled from 'styled-components'

export const Container = styled.nav`
  background: #252934;
  position: absolute;
  height: 100vh;
  width: 100%;
  color: #efefef;

  display: flex;
  flex-direction: column;
  align-items: center;

  > button{
    position: absolute;
    right: 1rem; 
    margin-top: 1rem;
    background: none;
    border: none;

    &:active{
      transform: scale(.9);
    }
  }
`

export const Content = styled.div`
  margin-top: 5rem;
  width: 80%;

  > h1{
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-radius: 8px 8px 0 0;
    background: #b8b8b8;
    text-align: center;
    color: #070707;
  }
`