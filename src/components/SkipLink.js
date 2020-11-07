import React from 'react';
import styled from 'styled-components';

const StyledSkipLink = styled.a`
  position: fixed;
  top: -30em;
  width: 100%;
  left: 0;
  z-index: 1;
  background: var(--primary500);
  color: var(--grey100);
  padding: var(--gap20) var(--gap30) var(--gap30);
  font-size: 1rem;
  text-align: center;
  transition: top 0.1s linear;
  &:focus {
    top: 0;
  }
`;

const SkipLink = () => (
  <StyledSkipLink href="#main" id="skip-link" title="Ir al #main">
    Ir al contenido principal
  </StyledSkipLink>
);

export default SkipLink;
