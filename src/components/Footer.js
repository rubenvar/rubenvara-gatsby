import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Inner from './Inner';

const StyledFooter = styled.footer`
  background: rebeccapurple;
  padding: 1.45rem 1.0875rem;
  margin-top: 1.45rem;
`;

const Footer = () => (
  <StyledFooter>
    <Inner>
      <Nav />
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Inner>
  </StyledFooter>
);

export default Footer;
