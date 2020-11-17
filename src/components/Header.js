import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper } from './styles/LayoutStyles';
import Nav from './Nav.js';

const StyledHeader = styled.header`
  background: var(--white);
  margin: 0;
  padding: var(--gap20) 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 1.85rem;
      margin: 0;
      line-height: 1;
      font-family: var(--logoFont);
      a {
        background: var(--logoGradient);
        background-clip: text;
        -webkit-background-clip: text;
        color: var(--primary500);
        color: transparent;
        text-decoration: none;
      }
    }
  }
`;
// hardcoded instead of getting the site-title in gatsby-config
const title = `rubenvara.io`;

const Header = ({ location }) => (
  <StyledHeader>
    <Wrapper>
      <h2>
        <Link to="/">{title}</Link>
      </h2>
      <Nav isHeader location={location} />
    </Wrapper>
  </StyledHeader>
);

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
