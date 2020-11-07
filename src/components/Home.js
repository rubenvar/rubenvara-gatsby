import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import IntroText from './IntroText';

function Homepage() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "rub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // separate the letters
  const letters = Array.from('Rubén Vara').map((letter, i) => (
    <span key={i} className={letter === ' ' ? '💩' : '🚀'}>
      {letter}
    </span>
  ));
  // const colors = ['primary400', 'primary500', 'primary600', 'primary700'];
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <h1>{letters}</h1>
      <p>Diseño páginas web. Escalo. Nado en aguas abiertas.</p>

      <IntroText />
      {/* <Img fluid={data.backgroundImage.childImageSharp.fluid} /> */}
    </>
  );
}

export default Homepage;
