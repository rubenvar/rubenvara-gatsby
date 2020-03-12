import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Inner from './styles/Inner';

const StyledFooter = styled.footer`
  background: ${props => props.theme.primary500};
  padding: 20px;
  margin-top: 32px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
