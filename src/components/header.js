import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Inner from './Inner';

const StyledHeader = styled.header`
  background: ${props => props.theme.white};
  margin: 0;
  padding: 7px 0;
  /* border-bottom: 1px solid #eee; */
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 1.85rem;
      margin: 0;
      line-height: 1;
      font-family: 'Mansalva', cursive;
      a {
        background: linear-gradient(
          to right,
          ${props => props.theme.primary600},
          ${props => props.theme.primary700},
          ${props => props.theme.primary500},
          ${props => props.theme.primary500},
          ${props => props.theme.primary700}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: ${props => props.theme.primary500};
        color: transparent;
        text-decoration: none;
      }
    }
    nav {
      a {
        color: ${props => props.theme.grey800};
        /* text-decoration: none; */
        &:hover {
          color: ${props => props.theme.primary700};
        }
      }
    }
  }
`;

const Header = ({ isBlog }) => {
  // hardcoded instead of getting the site-title in gatsby-config
  const title = `rubenvara.io`;

  return (
    <StyledHeader>
      <Inner>
        <h2>
          <Link to="/">{title}</Link>
        </h2>
        {!isBlog && (
          <nav>
            <Link to="/blog">Ir al Blog</Link>
          </nav>
        )}
      </Inner>
    </StyledHeader>
  );
};

Header.propTypes = {
  isBlog: PropTypes.bool,
};

export default Header;
