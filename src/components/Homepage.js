import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Footer from './Footer';
import Nav from './Nav';
import StyledHero from './styles/StyledHomepage';

function Homepage() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "rub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isLongIntro, setIsLongIntro] = useState(false);

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
              Estudié un grado
              <span hidden={!isLongIntro}>
                {' '}
                en alternancia en el IMH, Elgoibar
              </span>
              . Trabajé varios años como ingeniero industrial.{' '}
              <span hidden={isLongIntro}>
                Decidí cambiar mi vida y abandonarlo todo.
              </span>
              <span hidden={!isLongIntro}>
                Aprendí un monton muy grande sobre gestión y procesos
                comerciales.
              </span>
            </p>
            <p hidden={!isLongIntro}>
              También descubrí que no era así como quería vivir el resto de mis
              días. Decidí cambiar mi vida por completo y abandonarlo todo. O
              intentarlo.
            </p>
            <p>
              Me marché de viaje,{' '}
              <span hidden={isLongIntro}>sin fechas ni planes</span>
              <span hidden={!isLongIntro}>
                con solo una fecha de inicio y el vago plan de dar la vuelta al
                mundo. Me quedé por el camino
              </span>
              .
              <span hidden={isLongIntro}>
                {' '}
                Pasé tres años viviendo en varios países, creando mi negocio
                online, escalando, y estudiando.
              </span>
            </p>
            <p hidden={!isLongIntro}>
              Pasé tres años recorriendo todo el este de Europa y un poco más.
              Viví en varios lugares, creando mi negocio online, estudiando,
              escalando donde podía, y conociendo cientos de personas
              maravillosas.
            </p>
            <p>
              Volví a casa, para vivir en el monte alejado{' '}
              <span hidden={!isLongIntro}>todo lo posible </span>del mundo real.
              Para dedicar mi tiempo a estudiar,{' '}
              <span hidden={isLongIntro}>
                entrenar, y trabajar en mi negocio
              </span>
              <span hidden={!isLongIntro}>
                y a escalar y nadar casi a diario
              </span>
              .
            </p>
            <p hidden={!isLongIntro}>
              Y a trabajar en mi negocio online, donde diseño y desarrollo
              aplicaciones web modernas con tecnologías punteras. Suelo romper
              el Internet a menudo pero siempre consigo arreglarlo.
            </p>
            <p>
              <button
                type="button"
                onClick={() => setIsLongIntro(!isLongIntro)}
                onKeyPress={() => setIsLongIntro(!isLongIntro)}
              >
                <span hidden={isLongIntro}>Ver la versión larga</span>
                <span hidden={!isLongIntro}>Volver a la versión corta</span>
              </button>
            </p>
          </div>
        </main>
        <Nav isIndex />
      </StyledHero>
      <Footer isIndex />
    </>
  );
}

export default Homepage;
