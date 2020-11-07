import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import StyledNav from './styles/StyledNav';

const NavSep = () => <div className="nav__sep">◇</div>;

const NavItem = ({ to, text, top, bottom }) => (
  <div className={`nav__item nav__item--${to.replace('/', '')}`}>
    <span className="top">{top}</span>
    <Link to={to}>{text}</Link>
    <span className="bottom">{bottom}</span>
  </div>
);

const Nav = ({ isIndex }) => (
  <StyledNav isIndex={isIndex}>
    <ul>
      {!isIndex && <NavItem to="/" top="🚀🚀" text="inicio" />}
      {!isIndex && <NavSep />}
      <NavItem to="/now" top="Mira qué hago" text="ahora" />
      {!isIndex && <NavSep />}
      <NavItem to="/blog" bottom="sobre webdev." text="blog" />
    </ul>
  </StyledNav>
);

NavItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};

Nav.propTypes = {
  isIndex: PropTypes.bool,
};

export default Nav;
