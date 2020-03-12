import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Inner from './styles/Inner';

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  padding: 32px 0;
  h1 {
    margin: 0;
    line-height: 1;
    font-family: 'Mansalva', cursive;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Inner>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Inner>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
