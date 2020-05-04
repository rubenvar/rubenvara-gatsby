import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Footer from './Footer';
import Nav from './Nav';
import StyledHero from './styles/StyledIndex';

function Homepage() {
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
    <>
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
          <h2>Full Stack Web Developer</h2>
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
    </>
  );
}

export default Homepage;
