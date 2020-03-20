import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Nav from '../components/Nav';

const IndexPage = () => (
  <Layout type="index">
    <SEO title="Home" />
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
    <p>Durante esta última década...</p>
    <p>
      Estudié una carrera. Trabajé varios años como ingeniero industrial. Decidí
      cambiar mi vida y abandonarlo todo.
    </p>
    <p>
      Me marché de viaje sin fechas ni planes. Pasé tres años viviendo en varios
      países, creando mi negocio online, escalando, y estudiando SEO y
      desarrollo web.
    </p>
    <p>
      Volví a casa para vivir en el monte, alejado todo lo posible de la vida
      real. Y para dedicar mi tiempo a leer, estudiar, y entrenar como nadador
      de aguas abiertas.
    </p>
    <Nav />
  </Layout>
);

export default IndexPage;
