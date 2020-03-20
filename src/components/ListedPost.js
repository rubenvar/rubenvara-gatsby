import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import CategoryLink from './CategoryLink';

const StyledListedPost = styled.div`
  background: ${props => props.theme.listedPostBg};
  box-shadow: ${props => props.theme.shadow100};
  padding: 12px;
  margin: 0 0 68px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.01);
    box-shadow: ${props => props.theme.shadow200};
  }
  h2 {
    font-family: 'Victor Mono', monospace;
    a {
      text-decoration: none;
      color: ${props => props.theme.primary600};
      &:hover {
        color: ${props => props.theme.primary900};
      }
    }
  }
  .meta {
    font-size: 0.75rem;
    margin: 14px 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > span {
      color: ${props => props.theme.grey600};
      &.meta__cats {
        span {
          margin-right: 4px;
          a {
            text-decoration: none;
            color: ${props => props.theme.grey600};
            &:hover {
              color: ${props => props.theme.grey900};
            }
            &::before {
              content: '#';
            }
          }
        }
      }
    }
  }
  .description {
    color: ${props => props.theme.grey600};
    font-size: 0.85rem;
  }
  > a {
    margin-bottom: 0;
  }
`;

const ListedPost = ({ post }) => {
  const minutes = Math.ceil(post.fields.readingTime.minutes);
  return (
    <StyledListedPost>
      <h2>
        <Link to={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      <div className="meta">
        <p>
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </p>
        <span>
          {minutes} minuto{minutes > 1 && 's'}
        </span>
        <span className="meta__cats">
          {post.frontmatter.categories.map(cat => (
            <span key={cat}>
              <CategoryLink cat={cat}>{cat.toLowerCase()}</CategoryLink>
            </span>
          ))}
        </span>
      </div>
      <p className="description">{post.frontmatter.description}</p>
    </StyledListedPost>
  );
};

ListedPost.propTypes = {
  post: PropTypes.any,
};

export default ListedPost;
