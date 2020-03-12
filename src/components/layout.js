import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
// import './Layout.css';
import theme from './styles/Theme';
import Inner from './styles/Inner';
import GlobalStyle from './styles/GlobalStyle';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Inner>
          <main>{children}</main>
        </Inner>
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
