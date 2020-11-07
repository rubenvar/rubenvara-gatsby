import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import StyledPaginationDefault from './styles/StyledPagination';

const StyledPostNav = styled.nav`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.gap40};
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: ${(props) => props.theme.gap20};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.grey900};
    }
    &.next {
      text-align: right;
    }
    span {
      display: block;
      &.dir {
        font-family: 'Victor Mono', monospace; 
        font-size: ${(props) => props.theme.fontSize70};
      }
      &.title {
        text-decoration: underline;
      }
    }
  } */
  /* ${StyledPaginationDefault}; */
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.gap20};
  gap: ${(props) => props.theme.gap20};
  margin: ${(props) => props.theme.gap100} 0;
  div {
    a {
      padding: ${(props) => props.theme.gap30} ${(props) => props.theme.gap30}
        ${(props) => props.theme.gap30};
      display: grid;
      grid-template-rows: 1.25fr 1fr;
      align-items: center;
      span {
        display: block;
        &.dir {
          color: ${(props) => props.theme.primary400};
          font-family: 'Victor Mono', monospace;
          font-weight: 700;
        }
        &.title {
          margin-top: ${(props) => props.theme.gap10};
          color: ${(props) => props.theme.grey400};
          font-size: 0.6rem;
          align-self: end;
        }
      }
    }
  } */
`;

const PostNav = ({ prev, next }) => (
  <StyledPostNav>
    {prev && (
      <Link className="prev" to={`/${prev.frontmatter.slug}`}>
        <span className="dir">←</span>
        <span className="title">{prev.frontmatter.title}</span>
      </Link>
    )}
    {next && (
      <Link className="next" to={`/${next.frontmatter.slug}`}>
        <span className="title">{next.frontmatter.title}</span>
        <span className="dir">→</span>
      </Link>
    )}
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
