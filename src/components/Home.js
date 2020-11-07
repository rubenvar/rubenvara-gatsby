import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

  return (
    <>
      <p>Diseño páginas web. Escalo. Nado en aguas abiertas.</p>
      <h4>Y durante la última década...</h4>
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
      <p>Leer la versión larga</p>
      <Img
        // className="full-bleed"
        fluid={data.backgroundImage.childImageSharp.fluid}
      />
    </>
  );
}

export default Homepage;
