import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import PostMeta from './PostMeta';

const StyledListedPost = styled.div`
  margin-bottom: var(--gap110);
  h2 {
    font-weight: 400;
    font-size: var(--fontSize60);
    a {
      text-decoration: none;
      color: var(--primary600);
      &:hover {
        color: var(--primary900);
      }
    }
  }
  .description {
    color: var(--grey500);
    font-size: var(--fontSize30);
    margin: 0;
    line-height: 1.35rem;
    a {
      color: var(--grey800);
      text-decoration: none;
      &:hover {
        color: var(--primary600);
      }
    }
  }
`;

function ListedPost({ post: { frontmatter: post } }) {
  return (
    <StyledListedPost>
      <h2>
        <Link to={`/${post.slug}/`}>{post.title}</Link>
      </h2>
      {post.description ? (
        <p className="description">{post.description}</p>
      ) : null}
      <PostMeta date={post.date} cats={post.categories} />
    </StyledListedPost>
  );
}

ListedPost.propTypes = {
  post: PropTypes.any.isRequired,
};

export default ListedPost;
