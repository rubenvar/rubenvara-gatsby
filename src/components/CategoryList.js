import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryLink from './CategoryLink';

const StyledCategoryList = styled.aside`
  div {
    margin: var(--gap50) 0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      margin: var(--gap40) var(--gap30);
      a {
        padding: var(--gap20);
        color: var(--primary600);
        text-decoration: none;
        &:hover {
          color: var(--grey100);
          background-color: var(--primary600);
        }
      }
    }
  }
`;

function CategoryList() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const { group: allCategories } = data?.allMdx;

  return (
    <StyledCategoryList>
      <h2>Todas las categorías:</h2>
      <div>
        {allCategories.map((category) => (
          <span key={category.fieldValue}>
            <CategoryLink
              cat={category.fieldValue}
              total={category.totalCount}
            />
          </span>
        ))}
      </div>
    </StyledCategoryList>
  );
}

export default CategoryList;
