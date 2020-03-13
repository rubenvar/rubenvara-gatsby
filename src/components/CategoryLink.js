import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

export default function CategoryLink({ cat, children }) {
  return <Link to={`/categoria/${kebabCase(cat)}`}>{children}</Link>;
}

CategoryLink.propTypes = {
  cat: PropTypes.string.isRequired,
  children: PropTypes.string,
};
