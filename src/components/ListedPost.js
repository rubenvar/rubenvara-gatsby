import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import CategoryLink from './CategoryLink';

const StyledListedPost = styled.div`
  background: ${props => props.theme.whiteTr};
  box-shadow: ${props => props.theme.shadow200};
  padding: 12px;
  padding-left: 15px;
  margin: 0 0 78px;
  transition: all 0.5s;
  position: relative;
  transform: rotate(-1deg);
  &::before,
  &::after {
    transition: all 0.3s;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.whiteTr};
    box-shadow: ${props => props.theme.shadow100};
  }
  &::before {
    z-index: -1;
  }
  &::after {
    z-index: -2;
    transform: rotate(3deg);
  }
  &:hover {
    transform: scale(1.01) rotate(-1deg);
    box-shadow: ${props => props.theme.shadow300};
    &::before,
    &::after {
      box-shadow: ${props => props.theme.shadow200};
    }
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
    margin: 22px 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > span {
      color: ${props => props.theme.grey500};
      &.meta__read {
        justify-self: center;
      }
      &.meta__cats {
        justify-self: end;
        .meta__cat {
          margin-right: 4px;
          a {
            text-decoration: none;
            color: ${props => props.theme.grey500};
            &:hover {
              color: ${props => props.theme.grey800};
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
    margin-top: 16px;
    color: ${props => props.theme.grey500};
    font-size: 0.75rem;
    line-height: 1.3rem;
    a {
      color: ${props => props.theme.grey800};
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.primary600};
      }
    }
  }
`;

const ListedPost = ({ post }) => {
  const minutes = Math.ceil(post.fields.readingTime.minutes);
  return (
    <StyledListedPost>
      <h2>
        <Link to={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      {post.frontmatter.description || post.excerpt ? (
        <p className="description">
          {post.frontmatter.description || post.excerpt}{' '}
          <Link to={`/${post.frontmatter.slug}`}>→ Sigue leyendo</Link>
        </p>
      ) : null}
      <div className="meta">
        <span className="meta__date">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </span>
        <span
          className="meta__read"
          title={`Tiempo de lectura: solo ${minutes} minuto${
            minutes > 1 ? 's' : ''
          }`}
        >
          {minutes} minuto{minutes > 1 && 's'}
        </span>
        <span className="meta__cats">
          {post.frontmatter.categories.map(cat => (
            <span className="meta__cat" key={cat}>
              <CategoryLink cat={cat}>{cat.toLowerCase()}</CategoryLink>
            </span>
          ))}
        </span>
      </div>
    </StyledListedPost>
  );
};

ListedPost.propTypes = {
  post: PropTypes.any.isRequired,
};

export default ListedPost;
