import React, { Fragment } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 50px;
  min-height: 100vh;
  main {
    margin-top: 30px;
    .title {
      margin-bottom: 60px;
      h1 {
        font-size: 5rem;
        font-family: 'Mansalva', cursive;
        color: ${props => props.theme.red};
      }
      h2 {
        font-weight: 400;
        color: ${props => props.theme.greyDarker};
        margin-top: -10px;
      }
    }
    p {
      margin-bottom: 24px;
      font-size: 1.2rem;
    }
  }
`;

const IndexPage = () => (
  <Fragment>
    <StyledHero>
      <main>
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
          <h2>Full Stack Web Developer</h2>
        </div>
        <p>Durante esta última década...</p>
        <p>
          Estudié una carrera. Trabajé varios años como ingeniero industrial.
          Decidí cambiar mi vida y abandonarlo todo.
        </p>
        <p>
          Me marché de viaje sin fechas ni planes. Pasé tres años viviendo en
          varios países, creando mi negocio online, escalando, y estudiando SEO
          y desarrollo web.
        </p>
        <p>
          Volví a casa para vivir en el monte, alejado todo lo posible de la
          vida real. Y para dedicar mi tiempo a leer, estudiar, y entrenar como
          nadador de aguas abiertas.
        </p>
      </main>
      <Nav isIndex />
    </StyledHero>
    <Footer isIndex />
  </Fragment>
);

export default IndexPage;
