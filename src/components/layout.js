import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
// import './styles/Layout.css';
import theme from './styles/Theme';
import Inner from './styles/Inner';
import TopBar from './styles/TopBar';
import GlobalStyle from './styles/GlobalStyle';

const Layout = ({ isPost, children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <TopBar />
      {!isPost && <Header />}
      <Inner>
        <main>{children}</main>
      </Inner>
      <Footer />
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isPost: PropTypes.bool,
};

export default Layout;
