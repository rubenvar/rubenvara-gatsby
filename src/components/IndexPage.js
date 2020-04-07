import React, { Fragment, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Footer from './Footer';
import Nav from './Nav';
import rub from '../images/rub.jpg';

const shineAnim = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(440px);
  }
`;

const shadowAnim = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const StyledHero = styled.div`
  padding: 50px;
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
    margin-bottom: 60px;
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
    .text {
      max-width: ${props => props.theme.maxWidth};
      p {
        margin-bottom: 24px;
        font-size: 1.1rem;
        line-height: 1.7;
      }
    }
    nav {
      position: fixed;
      z-index: 90;
    }
  }
`;

const IndexPage = () => {
  const [shine, setShine] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "rub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <StyledHero>
        <Img
          className="image"
          fluid={data.backgroundImage.childImageSharp.fluid}
          style={{ position: 'fixed' }}
        />
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
