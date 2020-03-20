import React, { Fragment, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Footer from './Footer';
import Nav from './Nav';

const shineAnim = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(440px);
  }
`;

const StyledHero = styled.div`
  padding: 50px;
  min-height: 100vh;
  .title {
    margin-bottom: 60px;
    h1 {
      font-size: 5.5rem;
      font-family: 'Mansalva', cursive;
      color: ${props => props.theme.primary500};
      .💩 {
        display: inline-block;
        transition: all 0.25s;
        &:hover {
          transform: translateY(-20px);
          &:nth-child(4) {
            transform: translateY(-20px) translateX(-6px) rotate(-23deg);
          }
          &:nth-child(10) {
            transform: translateY(29px) translateX(6px) rotate(33deg);
          }
        }
      }
    }
    h2 {
      font-weight: 400;
      color: ${props => props.theme.grey600};
      margin-top: -10px;
      font-size: 1.6rem;
      position: relative;
      display: table;
      &::before {
        pointer-events: none;
        content: '';
        width: 70px;
        position: absolute;
        background: linear-gradient(
          75deg,
          #fff0,
          ${props => props.theme.white},
          #fff0
        );
        top: 0;
        bottom: 0;
        left: -70px;
      }
      &.enter-active {
        &::before {
          animation: ${shineAnim} 0.51s linear;
        }
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin-top: 30px;
    min-height: 70vh;
    p {
      margin-bottom: 24px;
      font-size: 1.1rem;
      line-height: 1.7;
    }
  }
`;

const IndexPage = () => {
  const [shine, setShine] = useState(false);

  return (
    <Fragment>
      <StyledHero>
        <div className="title">
          <h1>
            <span className="💩">R</span>
            <span className="💩">u</span>
            <span className="💩">b</span>
            <span className="💩">é</span>
            <span className="💩">n</span>
            <span className="🚀">&nbsp;</span>
            <span className="💩">V</span>
            <span className="💩">a</span>
            <span className="💩">r</span>
            <span className="💩">a</span>
          </h1>
          <CSSTransition in={shine} timeout={700}>
            <h2
              onMouseEnter={() => {
                setShine(true);
                setTimeout(() => setShine(false), 1000);
              }}
            >
              Full Stack Web Developer
            </h2>
          </CSSTransition>
        </div>
        <main>
          <div className="text">
            <p>Durante esta última década...</p>
            <p>
              Estudié una carrera. Trabajé varios años como ingeniero
              industrial. Decidí cambiar mi vida y abandonarlo todo.
            </p>
            <p>
              Me marché de viaje, sin fechas ni planes. Pasé tres años viviendo
              en varios países, creando mi negocio online, escalando, y
              estudiando.
            </p>
            <p>
              Volví a casa, para vivir en el monte alejado del mundo real. Para
              dedicar mi tiempo a leer, estudiar, y entrenar.
            </p>
          </div>
          <Nav isIndex />
        </main>
      </StyledHero>
      <Footer isIndex />
    </Fragment>
  );
};

export default IndexPage;
