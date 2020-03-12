import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  background: rebeccapurple;
  padding: 1.45rem 1.0875rem;
  margin-top: 1.45rem;
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/now">Ahora</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/proyectos">Proyectos</Link>
      </li>
      <li>
        <Link to="/viajes">Viajes</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
