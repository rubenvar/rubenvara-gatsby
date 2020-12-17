import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import { Wrapper } from './styles/LayoutStyles';
import { useWindowSize } from '../utils';

// idea for footer from https://codepen.io/enbee81/full/yLyrmyg
const StyledFooter = styled.footer`
  --padding: ${(props) => props.width * props.magicNumber}px;
  position: relative;
  margin-top: var(--gap120);
  padding: calc((var(--padding) * 2) - (var(--padding) - var(--padding))) 0
    var(--gap50);
  clip-path: polygon(0% calc(var(--padding) * 2), 100% 0%, 100% 100%, 0% 100%);
  background: linear-gradient(transparent, var(--grey500));

  background: #ccc;
  p {
    margin: 0;
    font-size: var(--fontSize20);
    text-align: center;
    color: var(--grey500);
    a {
      color: var(--grey600);
      text-decoration: none;
      &:hover {
        color: var(--grey500);
      }
    }
  }
`;

function Footer({ location }) {
  const angle = -3;
  const magicNumber = Math.abs(Math.tan((angle * Math.PI) / 180) / 2);
  const { width } = useWindowSize();

  return (
    <StyledFooter magicNumber={magicNumber} width={width}>
      <Wrapper>
        <Nav location={location} />

        <p style={{ marginBottom: 12 }}>
          ©{new Date().getFullYear()} rubenvara.io ·{' '}
          <a href="mailto:hey@rubenvara.io">Contacto</a>
        </p>
        <p>
          Web creada con{' '}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{' '}
          y alojada en{' '}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          . El código está en{' '}
          <a
            href="https://github.com/rubenvar/rubenvara.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </Wrapper>
    </StyledFooter>
  );
}

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
