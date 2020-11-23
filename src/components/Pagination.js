import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';

const StyledPaginationButton = styled.div`
  height: 45px;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  ${({ disabled }) => disabled && `color: var(--grey300);`};
  ${({ dir }) => dir === 'prev' && `border-right: 1px solid;`};
  ${({ dir }) => dir === 'next' && `border-left: 1px solid;`};
  border-color: var(--grey200);
  transition: all 0.3s;
  &:hover {
    ${({ disabled }) => !disabled && `background-color: var(--grey100);`};
  }
`;

const StyledPagination = styled.nav`
  width: 32%;
  min-width: 220px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: var(--boxShadow100);
  border-radius: var(--smallBr);
  a {
    width: 100%;
  }
  p {
    height: 45px;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0;
    color: var(--grey600);
  }
`;

const PaginationButton = ({ dir, disabled }) => (
  <StyledPaginationButton dir={dir} disabled={disabled}>
    {dir === 'prev' ? <IconChevronLeft /> : <IconChevronRight />}
  </StyledPaginationButton>
);

function Pagination({
  totalCount,
  pageContext: { limit, skip, numPages, currentPage },
}) {
  // if not full page, don't show pagination component
  if (totalCount < limit) return null;

  return (
    <StyledPagination>
      {currentPage > 1 ? (
        <Link to={currentPage > 2 ? `/blog/${currentPage - 1}` : `/blog`}>
          <PaginationButton dir="prev" />
        </Link>
      ) : (
        <PaginationButton dir="prev" disabled />
      )}
      <div>
        <p>
          {currentPage} de {numPages}
        </p>
      </div>
      {currentPage < numPages ? (
        <Link to={`/blog/${currentPage + 1}`}>
          <PaginationButton dir="next" />
        </Link>
      ) : (
        <PaginationButton dir="next" disabled />
      )}
    </StyledPagination>
  );
}

PaginationButton.propTypes = {
  dir: PropTypes.string,
  disabled: PropTypes.bool,
};

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
