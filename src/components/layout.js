import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import Header from './Header';
import Footer from './Footer';
import theme from './styles/Theme';
import Inner from './Inner';
import TopBar from './TopBar';
import GlobalStyle from './styles/GlobalStyle';

const Layout = ({ isPost, isBlog, children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <TopBar />
      {!isPost && <Header isBlog={isBlog} />}
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
  isBlog: PropTypes.bool,
};

export default Layout;
