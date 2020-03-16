import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import IndexPage from './IndexPage';
import Header from './Header';
import Footer from './Footer';
import theme from './styles/Theme';
import Inner from './Inner';
import TopBar from './TopBar';
import GlobalStyle from './styles/GlobalStyle';
import BodySVGs from './BodySVG';

const Layout = ({ isIndex, isPost, isBlog, children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {isIndex ? (
        <IndexPage />
      ) : (
        <Fragment>
          <BodySVGs />
          <TopBar />
          {!isPost && <Header isBlog={isBlog} />}
          {isPost ? (
            <Fragment>{children}</Fragment>
          ) : (
            <Inner>
              <main>{children}</main>
            </Inner>
          )}
          <Footer />
        </Fragment>
      )}
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isPost: PropTypes.bool,
  isBlog: PropTypes.bool,
  isIndex: PropTypes.bool,
};

export default Layout;
