import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import StyledPaginationDefault from './styles/StyledPagination';

const StyledPagination = styled.div`
  ${StyledPaginationDefault};
  margin: 131px 0 ${props => props.theme.gap110};
  display: grid;
  grid-template-columns: 1fr 0.6fr 1fr;
  grid-gap: ${props => props.theme.gap50};
  gap: ${props => props.theme.gap50};
  font-family: 'Victor Mono', monospace;
  div {
    a {
      padding: ${props => props.theme.gap60} ${props => props.theme.gap30};
      font-family: 'Victor Mono', monospace;
      font-weight: 700;
    }
  }
  p {
    letter-spacing: -1px;
    align-self: center;
    text-align: center;
    line-height: 1.35rem;
    color: ${props => props.theme.grey300};
    span {
      color: ${props => props.theme.grey500};
    }
  }
`;

function Pagination({
  totalCount,
  pageContext: { limit, skip, numPages, currentPage },
}) {
  // if less posts than one page, don't show pagination component
  if (totalCount < limit) return null;

  return (
    <StyledPagination>
      <div>
        {currentPage > 1 && (
          <Link
            className="prev"
            to={currentPage > 2 ? `/blog/${currentPage - 1}` : `/blog`}
          >
            ← Anteriores
          </Link>
        )}
      </div>
      <p>
        Página
        <br />
        <span>{currentPage}</span> de <span>{numPages}</span>
      </p>
      <div>
        {currentPage < numPages && (
          <Link className="next" to={`/blog/${currentPage + 1}`}>
            Ver más →
          </Link>
        )}
      </div>
    </StyledPagination>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pagination;
