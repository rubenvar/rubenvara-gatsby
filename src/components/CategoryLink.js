import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

export default function CategoryLink({ cat, children }) {
  return (
    <Link to={`/categoria/${kebabCase(cat)}`} title={`Categoría ${cat}`}>
      {children}
    </Link>
  );
}

CategoryLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  cat: PropTypes.string.isRequired,
};
