import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { StyledPaginationDefault } from './styles/StyledPost';

const StyledPostNav = styled.nav`
  ${StyledPaginationDefault};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 73px 0;
  div {
    a {
      padding: 12px 12px 12px;
      display: grid;
      grid-template-rows: 1.25fr 1fr;
      align-items: center;
      span {
        display: block;
        &.dir {
          color: ${props => props.theme.primary400};
          font-family: 'Victor Mono', monospace;
          font-weight: 700;
        }
        &.title {
          margin-top: 4px;
          color: ${props => props.theme.grey400};
          font-size: 0.6rem;
          align-self: end;
        }
      }
    }
  }
`;

const PostNav = ({ prev, next }) => (
  <StyledPostNav>
    <div>
      {prev && (
        <Link className="prev" to={`/${prev.frontmatter.slug}`}>
          <span className="dir">← Anterior</span>
          <span className="title">{prev.frontmatter.title}</span>
        </Link>
      )}
    </div>
    <div>
      {next && (
        <Link className="next" to={`/${next.frontmatter.slug}`}>
          <span className="dir">Siguiente →</span>
          <span className="title">{next.frontmatter.title}</span>
        </Link>
      )}
    </div>
  </StyledPostNav>
);

PostNav.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  prev: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

export default PostNav;
