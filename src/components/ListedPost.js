import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import CategoryLink from './CategoryLink';
import ButtonLink from './styles/ButtonLink';

const StyledListedPost = styled.div`
  border-left: 1px solid ${props => props.theme.listedPostBorder};
  background: ${props => props.theme.listedPostBg};
  padding: 12px;
  margin: 46px auto;
  .meta {
    font-size: 0.75rem;
    margin: 14px 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > span {
      color: ${props => props.theme.greyDarker};
      &.meta__cats {
        span {
          margin-right: 4px;
          a {
            text-decoration: none;
            color: ${props => props.theme.greyDarker};
            &:hover {
              color: ${props => props.theme.black};
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
    color: ${props => props.theme.greyDarker};
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
        <span>{post.frontmatter.date}</span>
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
      <ButtonLink to={`/${post.frontmatter.slug}`}>Sigue leyendo</ButtonLink>
    </StyledListedPost>
  );
};

ListedPost.propTypes = {
  post: PropTypes.any,
};

export default ListedPost;
