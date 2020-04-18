import styled, { keyframes } from 'styled-components';

const shadowAnim = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const StyledHero = styled.div`
  padding: 55px;
  min-height: 100vh;
  background: linear-gradient(#fff3, hsl(0, 20%, 97%));
  position: relative;
  .image {
    height: calc(100% + 0px);
    top: -0px;
    width: calc(100% + 400px);
    right: -400px;
    z-index: -1;
  }
  .title {
    margin-bottom: 55px;
    h1 {
      font-size: 5.5rem;
      font-family: 'Mansalva', cursive;
      color: ${props => props.theme.primary500};
      background: ${props => props.theme.logoGradient};
      background-size: 250% 100%;
      background-repeat: no-repeat;
      animation: ${shadowAnim} infinite 3s alternate;
      display: table;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      .💩 {
        display: inline-block;
        transition: all 0.25s;
        &:hover {
          transform: translateY(-20px);
          &:nth-child(4) {
            transform: translateY(-20px) translateX(-6px) rotate(-23deg);
          }
          &:nth-child(10) {
            transform: translateY(19px) translateX(6px) rotate(33deg);
          }
        }
      }
    }
    h2 {
      font-weight: 400;
      color: ${props => props.theme.grey600};
      margin-top: -12px;
      font-size: 1.6rem;
      position: relative;
      display: table;
    }
  }
  main {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin-top: 32px;
    min-height: 70vh;
    .text {
      max-width: ${props => props.theme.maxWidth};
      p {
        margin-bottom: 25px;
        font-size: 1.15rem;
        line-height: 1.7;
      }
    }
    nav {
      position: fixed;
      z-index: 90;
    }
  }
`;

export default StyledHero;
