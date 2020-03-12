import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

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

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <StyledHeader>
      <Inner>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </Inner>
    </StyledHeader>
  );
};

export default Header;
