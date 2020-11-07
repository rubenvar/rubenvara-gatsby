import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

export default function CategoryLink({ cat, total = 0 }) {
  return (
    <Link to={`/categoria/${kebabCase(cat)}`} title={`Categoría ${cat}`}>
      #{cat.toLowerCase()}
      {total > 0 && ` (${total})`}
    </Link>
  );
}

CategoryLink.propTypes = {
  cat: PropTypes.string.isRequired,
  total: PropTypes.number,
};
