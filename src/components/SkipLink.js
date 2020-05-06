import React from 'react';
import styled from 'styled-components';

const StyledSkipLink = styled.a`
  position: fixed;
  top: -30em;
  width: 100%;
  left: 0;
  z-index: 1;
  background: ${props => props.theme.primary500};
  color: ${props => props.theme.grey100};
  padding: ${props => props.theme.gap20} ${props => props.theme.gap30}
    ${props => props.theme.gap30};
  font-size: 1rem;
  text-align: center;
  transition: top 0.1s linear;
  &:focus {
    top: 0;
  }
`;

const SkipLink = () => (
  <StyledSkipLink href="#main" id="skip-link">
    Skip to main content
  </StyledSkipLink>
);

export default SkipLink;
