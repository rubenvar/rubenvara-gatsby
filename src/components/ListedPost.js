import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import StyledListedPost from './styles/StyledListedPost';
import CategoryLink from './CategoryLink';

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
          <time dateTime={post.frontmatter.date}>
            {format(new Date(post.frontmatter.date), `d MMM, yyyy`, {
              locale: es,
            })}
          </time>
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
