import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Nav from './Nav';
import StyledHero from './styles/___StyledHomepage';
import theme from './styles/Theme';

const AnimatedIntro = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// hard-coded intro here ftw 😎
// two different components so framer motion will animate on each mount-unmount 🤞
const LongIntro = () => (
  <AnimatedIntro>
    <p>Durante la última década...</p>
    <p>
      Estudié un grado en alternancia en el IMH, Elgoibar. Trabajé varios años
      como ingeniero industrial. Aprendí un monton muy grande sobre procesos
      comerciales y otras cosas.
    </p>
    <p>
      Descubrí que <strong>no era así como quería vivir</strong>. Decidí cambiar
      mi vida por completo y abandonarlo todo. O intentarlo.
    </p>
    <p>
      Me marché de viaje, con el vago plan de dar la vuelta al mundo. Me quedé
      por el camino.
    </p>
    <p>
      Pasé <strong>tres años</strong> recorriendo el este de Europa y un poco
      más. Viví en varios países, creando mi negocio online, escalando, y
      conociendo cientos de personas maravillosas.
    </p>
    <p>
      Volví a casa, para vivir en el monte alejado del ruido del mundo real.
      Para dedicar mi tiempo a estudiar, y a escalar y nadar casi a diario.
    </p>
    <p>
      Y a trabajar en mi negocio online, donde diseño y desarrollo{' '}
      <strong>páginas y aplicaciones web modernas</strong> con tecnologías
      punteras. Suelo romper el Internet a menudo pero siempre consigo
      arreglarlo.
    </p>
  </AnimatedIntro>
);

const ShortIntro = () => (
  <AnimatedIntro>
    <p>Durante la última década...</p>
    <p>
      Estudié un grado. Trabajé varios años como ingeniero industrial. Decidí
      cambiar mi vida y abandonarlo todo.
    </p>
    <p>
      Me marché de viaje, sin fechas ni planes. Pasé tres años viviendo en
      varios países, creando mi negocio online, escalando, y estudiando.
    </p>
    <p>
      Volví a casa, para vivir en el monte alejado del ruido. Para dedicar mi
      tiempo a estudiar, entrenar, y trabajar en mi negocio.
    </p>
  </AnimatedIntro>
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
  // separate the letters
  const letters = Array.from('Rubén Vara').map((letter, i) => (
    <span key={i} className={letter === ' ' ? '🚀' : '💩'}>
      {letter}
    </span>
  ));

  const colors = ['primary400', 'primary500', 'primary600', 'primary700'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <StyledHero>
        <Img
          className="image"
          fluid={data.backgroundImage.childImageSharp.fluid}
          style={{ position: 'fixed' }}
        />
        <div className="title">
          <h1 style={{ color: theme[randomColor] }}>{letters}</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="intro">
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
        <Nav isIndex />
      </StyledHero>
      <Footer isIndex />
    </>
  );
}

AnimatedIntro.propTypes = {
  // children: PropTypes.object,
  children: PropTypes.array,
};

export default Homepage;
