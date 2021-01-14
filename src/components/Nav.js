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
  justify-content: center;
  align-items: center;
  gap: var(--gap70);
  padding: var(--gap80) 0 var(--gap110);
  font-size: var(--fontSize60);
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

const StyledSep = styled.span`
  font-size: var(--fontSize30);
  color: var(--secondary500);
  opacity: 0.8;
`;

const Sep = () => <StyledSep>◇</StyledSep>;

function Nav({ location = {} }) {
  // TODO will need to make this 'active' class adding logic more automated, if there are more pages in the nav 🤷‍♂️
  const isIndex = location.pathname === '/';
  const isBlog = location.pathname?.includes('/blog');
  const isNow = location.pathname === '/now';

  return (
    <StyledNav>
      {!isIndex && (
        <>
          <Link to="/">Inicio</Link>
          <Sep />
        </>
      )}
      <Link className={isBlog ? 'active' : ''} to="/blog">
        Blog
      </Link>
      <Sep />
      <Link className={isNow ? 'active' : ''} to="/now">
        Ahora
      </Link>
    </StyledNav>
  );
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Nav;
