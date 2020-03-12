import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  padding: 0;
  margin: 30px 0 60px;
  width: 540px;
  max-width: 80%;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
    }
  }
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
