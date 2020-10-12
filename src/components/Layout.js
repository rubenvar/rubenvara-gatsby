import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import 'normalize.css';

import Homepage from './Homepage';
import Header from './Header';
import Footer from './Footer';
import theme from './styles/Theme';
import Inner from './styles/Inner';
import GlobalStyle from './styles/GlobalStyle';
import SkipLink from './SkipLink';

const TopBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme.primary500};
  top: 0;
  position: sticky;
  z-index: 999;
`;

function Layout({ type, children }) {
  const isPost = type === 'post';
  const isIndex = type === 'index';
  const isBlog = type === 'blog';

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isIndex ? (
          <Homepage />
        ) : (
          <>
            <SkipLink />
            <TopBar />
            {!isPost && <Header isBlog={isBlog} />}
            <Inner>
              <main>{children}</main>
            </Inner>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
