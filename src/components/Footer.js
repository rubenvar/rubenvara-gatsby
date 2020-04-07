import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Nav from './Nav';
import Inner from './Inner';
import useWindowSize from '../utils/useWindowSize';

// idea for bg from https://codepen.io/enbee81/full/yLyrmyg
const StyledFooter = styled.footer`
  --padding: ${props => props.width * props.magicNumber}px;
  position: relative;
  /* margin-top: calc((var(--padding) * -1) - 2px); */
  margin-top: 0;
  padding: calc((var(--padding) * 2) - (var(--padding) - var(--padding))) 0 20px;
  clip-path: polygon(0% calc(var(--padding) * 2), 100% 0%, 100% 100%, 0% 100%);
  background: linear-gradient(transparent, ${props => props.theme.grey500});

  ${props =>
    props.isIndex &&
    css`
      background: hsl(0, 20%, 97%);
      clip-path: none;
    `}
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    p {
      font-size: 0.75rem;
      color: ${props =>
        !props.isIndex ? props.theme.grey200 : props.theme.grey400};
      a {
        text-decoration: none;
        transition: all 0.25s;
        color: ${props =>
          !props.isIndex ? props.theme.grey300 : props.theme.grey500};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Footer = ({ isIndex }) => {
  const angle = -3;
  const magicNumber = Math.abs(Math.tan((angle * Math.PI) / 180) / 2);
  const { width } = useWindowSize();

  return (
    <StyledFooter magicNumber={magicNumber} width={width} isIndex={isIndex}>
      {!isIndex && <Nav />}
      <Inner>
        <p>
          © {new Date().getFullYear()} rubenvara.io ·{' '}
          <Link to="/contacto">Contacto</Link>
        </p>
        <p>
          Web creada con <a href="https://www.gatsbyjs.com">Gatsby</a> y alojada
          en <a href="https://www.netlify.com/">Netlify</a>. El código está en{' '}
          <a href="https://github.com/rubenvar">Github</a>.
        </p>
      </Inner>
    </StyledFooter>
  );
};

Footer.propTypes = {
  isIndex: PropTypes.bool,
};

export default Footer;
