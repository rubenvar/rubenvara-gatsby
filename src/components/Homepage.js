import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { CSSTransition } from 'react-transition-group';

import Footer from './Footer';
import Nav from './Nav';
import StyledHero from './styles/StyledHomepage';

const LongIntro = () => (
  <>
    <p>
      Estudié un grado en alternancia en el IMH, Elgoibar. Trabajé varios años
      como ingeniero industrial. Aprendí un monton muy grande sobre procesos
      comerciales y otras cosas.
    </p>
    <p>
      Descubrí que <strong>no era así como quería vivir</strong> el resto de mis
      días. Decidí cambiar mi vida por completo y abandonarlo todo. O
      intentarlo.
    </p>
    <p>
      Me marché de viaje, con el vago plan de dar la vuelta al mundo. Me quedé
      por el camino.
    </p>
    <p>
      Pasé <strong>tres años</strong> recorriendo todo el este de Europa y un
      poco más. Viví en varios países, creando mi negocio online, escalando
      donde podía, y conociendo cientos de personas maravillosas.
    </p>
    <p>
      Volví a casa, para vivir en el monte alejado todo lo posible del mundo
      real. Para dedicar mi tiempo a estudiar, y a escalar y nadar casi a
      diario.
    </p>
    <p>
      Y a trabajar en mi negocio online, donde diseño y desarrollo{' '}
      <strong>páginas y aplicaciones web modernas</strong> con tecnologías
      punteras. Suelo romper el Internet a menudo pero siempre consigo
      arreglarlo.
    </p>
  </>
);

const ShortIntro = () => (
  <>
    <p>
      Estudié un grado. Trabajé varios años como ingeniero industrial. Decidí
      cambiar mi vida y abandonarlo todo.
    </p>
    <p>
      Me marché de viaje, sin fechas ni planes. Pasé tres años viviendo en
      varios países, creando mi negocio online, escalando, y estudiando.
    </p>
    <p>
      Volví a casa, para vivir en el monte alejado del mundo real. Para dedicar
      mi tiempo a estudiar, entrenar, y trabajar en mi negocio.
    </p>
  </>
);

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
            {isLongIntro ? <LongIntro /> : <ShortIntro />}
            <p>
              <button
                type="button"
                onClick={() => setIsLongIntro(!isLongIntro)}
                onKeyPress={() => setIsLongIntro(!isLongIntro)}
              >
                {isLongIntro
                  ? `Volver a la versión corta ←`
                  : `Ver la versión larga...`}
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
