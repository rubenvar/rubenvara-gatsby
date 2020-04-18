import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css';

import IndexPage from './IndexPage';
import Header from './Header';
import Footer from './Footer';
import theme from './styles/Theme';
import Inner from './styles/Inner';
import GlobalStyle from './styles/GlobalStyle';
import BodySVGs from './BodySVG';
import SkipLink from './SkipLink';

const TopBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme.primary500};
  top: 0;
  position: sticky;
  z-index: 999;
`;

const Layout = ({ type, children }) => {
  const isPost = type === 'post';
  const isIndex = type === 'index';
  const isBlog = type === 'blog';

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isIndex ? (
          <IndexPage />
        ) : (
          <Fragment>
            <BodySVGs />
            <SkipLink />
            <TopBar />
            {!isPost && <Header isBlog={isBlog} />}
            <Inner>
              <main>{children}</main>
            </Inner>
            <Footer />
          </Fragment>
        )}
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
