import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Styled404 = styled.main`
  margin-bottom: ${props => props.theme.gap110};
  h1 {
    margin-bottom: ${props => props.theme.gap90};
  }
  p {
    font-size: 1.15rem;
    margin-bottom: ${props => props.theme.gap50};
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error 404: No encontrado" />
    <Styled404>
      <h1>🤕 ERROR 404</h1>
      <p>Parece que el link que seguías está roto...</p>
      <p>Quizás sea porque he renovado la web hace poco, lo siento! 🤷‍♂️</p>
      <br />
      <p>
        Vuelve al <Link to="/">inicio</Link> para empezar otra vez, o echa un
        vistazo al <Link to="/blog">blog</Link> 🚀
      </p>
    </Styled404>
  </Layout>
);

export default NotFoundPage;
