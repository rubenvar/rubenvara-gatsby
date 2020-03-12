import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Inner from './styles/Inner';

const StyledHeader = styled.header`
  background: ${props => props.theme.whiteBg};
  margin-bottom: 1.45rem;
  padding: 12px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  h1 {
    margin: 0;
    line-height: 1;
    font-family: 'Mansalva', cursive;
    a {
      color: ${props => props.theme.primary500};
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
