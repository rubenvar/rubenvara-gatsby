import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Nav from './Nav';
import Inner from './Inner';
import useWindowSize from '../utils/useWindowSize';

// idea for bg from https://codepen.io/enbee81/full/yLyrmyg
const StyledFooter = styled.footer`
  --padding: ${props => props.width * props.magicNumber}px;
  position: relative;

  margin-top: calc((var(--padding) * -1) - 2px);
  margin-top: 0;
  padding: calc((var(--padding) * 2) - (var(--padding) - var(--padding))) 0 4em;
  clip-path: polygon(0% calc(var(--padding) * 2), 100% 0%, 100% 100%, 0% 100%);

  background: ${props => props.theme.bgDarker};
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.05) 50%,
      0,
      transparent 100%
    ),
    linear-gradient(
      -135deg,
      ${props => props.theme.redLighter},
      ${props => props.theme.red}
    );
  background-size: 0.5em 0.5em, 100% 100%;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;

const Footer = () => {
  const angle = -5;
  const magicNumber = Math.abs(Math.tan((angle * Math.PI) / 180) / 2);
  const { width } = useWindowSize();

  return (
    <StyledFooter magicNumber={magicNumber} width={width}>
      <Inner>
        <Nav />
        <p>
          © {new Date().getFullYear()} rubenvara.io ·{' '}
          <Link to="/contacto">Contacto</Link>
        </p>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
