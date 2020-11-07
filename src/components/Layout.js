import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import SkipLink from './SkipLink';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import { Main } from './styles/LayoutStyles';
import GlobalStyle from './styles/GlobalStyle';

const Layout = ({ children, location }) => (
  <>
    <GlobalStyle />
    <SkipLink />
    <TopBar />
    {location.pathname !== '/' && <Header location={location} />}
    <Main id="main">{children}</Main>
    <Footer location={location} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
