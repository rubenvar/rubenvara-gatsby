import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import StyledNav from './styles/StyledNav';

// const NavSep = () => <div className="nav__sep">◇</div>;

// const NavItem = ({ to, text, top, bottom }) => (
//   <div className={`nav__item nav__item--${to.replace('/', '')}`}>
//     <span className="top">{top}</span>
//     <Link to={to}>{text}</Link>
//     <span className="bottom">{bottom}</span>
//   </div>
// );

const StyledNav = styled.nav`
  /* display: grid; */
  /* grid-template-columns: auto auto; */
  display: flex;
  justify-content: space-between;
  gap: var(--gap60);
  a {
    text-decoration: none;
    color: var(--primary700);
    &.active {
      font-weight: 700;
    }
    &:hover {
      color: var(--primary300);
    }
  }
`;

function Nav({ isHeader = false, isFooter = false, location = {} }) {
  const isIndex = location.pathname === '/';
  const isBlog = location.pathname?.includes('/blog');
  const isNow = location.pathname === '/now';

  return (
    <StyledNav>
      {isFooter && !isIndex && <Link to="/">Inicio</Link>}
      <Link className={isBlog ? 'active' : ''} to="/blog">
        Blog
      </Link>
      <Link className={isNow ? 'active' : ''} to="/now">
        Ahora
      </Link>
    </StyledNav>
  );
}

Nav.propTypes = {
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Nav;
