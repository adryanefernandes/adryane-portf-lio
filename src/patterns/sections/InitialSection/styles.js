import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  background: #252934;
  padding-top: 1.5rem;

  #svgWave {
    position: absolute;
    bottom: -1px;
  }
`
export const Content = styled.div`
  height: 82vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1{
    color: #efefef;
    text-align: center;
    font-weight: 500;
    font-size: 2.3rem;

    >span{
      color: #d1345b;
      display: block;
    }
  }

  > h2{
    color: #b8b8b8;
    font-weight: 200;
    font-size: 1.2rem;
  }

  > button {
    color: #efefef;
    background: none;
    margin-top: 2rem;
    font-size: 1.2rem;
    border: 2px solid #efefef;
    padding: .5rem 1rem;

    display: flex;
    align-items: center;

    &:active{
      background: #34d1bf;
      color: #070707;
      border: 2px solid #34d1bf;
    }
  }
`
