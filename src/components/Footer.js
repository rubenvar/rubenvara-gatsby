import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Inner from './styles/Inner';
import useCurrentWidth from '../utils/useCurrentWidth';

const StyledFooter = styled.footer`
  /* background: ${props => props.theme.bgDarker}; */
  padding: ${props => props.width * props.magicNumber}px 0;
  margin-top: 32px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.red};
    transform: skewy(${props => props.angle}deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 2px dashed grey;
  }
`;

const Footer = () => {
  const angle = -5;
  const magicNumber = Math.abs(Math.tan((angle * Math.PI) / 180) / 2);
  const width = useCurrentWidth();

  return (
    <StyledFooter angle={angle} magicNumber={magicNumber} width={width}>
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
};

export default Footer;
