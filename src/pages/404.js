import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Styled404 = styled.main`
  h1 {
    margin-bottom: ${props => props.theme.gap70};
  }
  p {
    margin-bottom: ${props => props.theme.gap50};
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404>
      <h1>ERROR 404</h1>
      <p>
        Parece que el link que seguías está roto. Quizás es porque he renovado
        la web hace poco, lo siento! 🤷‍♂️
      </p>
      <p>
        Vuelve al <Link to="/">inicio</Link> para empezar otra vez, o echa un
        vistazo al <Link to="/blog">blog</Link> 🚀
      </p>
    </Styled404>
  </Layout>
);

export default NotFoundPage;
