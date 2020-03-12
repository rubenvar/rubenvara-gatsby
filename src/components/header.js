import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Inner from './Inner';

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  > div {
    padding: 1.45rem 1.0875rem;
    h1 {
      margin: 0;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Inner>
      <h1>
        <Link to="/" style={{}}>
          {siteTitle}
        </Link>
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
