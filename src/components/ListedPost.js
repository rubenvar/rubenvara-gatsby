import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import StyledListedPost from './styles/StyledListedPost';

function ListedPost({ post }) {
  const dateFormat =
    new Date(post.frontmatter.date).getFullYear() === new Date().getFullYear()
      ? `d MMM`
      : `d MMM, yyyy`;
  return (
    <StyledListedPost>
      <h2>
        <Link to={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      {post.frontmatter.description ? (
        <p className="description">{post.frontmatter.description}</p>
      ) : null}
      <div className="meta">
        <span className="meta__date">
          <time dateTime={post.frontmatter.date}>
            {format(new Date(post.frontmatter.date), dateFormat, {
              locale: es,
            })}
          </time>
        </span>
        <span className="meta__cats">
          {post.frontmatter.categories.map(cat => (
            <span className="meta__cat" key={cat}>
              {cat.toLowerCase()}
            </span>
          ))}
        </span>
      </div>
    </StyledListedPost>
  );
}

ListedPost.propTypes = {
  post: PropTypes.any.isRequired,
};

export default ListedPost;
