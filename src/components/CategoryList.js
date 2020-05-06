import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryLink from './CategoryLink';

const StyledCategoryList = styled.div`
  h2 {
    font-family: 'Victor Mono', monospace;
  }
  > div {
    margin: ${props => props.theme.gap50} 0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      margin: ${props => props.theme.gap40} ${props => props.theme.gap30};
      a {
        padding: ${props => props.theme.gap20};
        color: ${props => props.theme.primary600};
        text-decoration: none;
        &:hover {
          color: ${props => props.theme.grey100};
          background-color: ${props => props.theme.primary600};
        }
      }
    }
  }
`;

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { group } = data.allMarkdownRemark;

  return (
    <StyledCategoryList>
      <>
        <h2>Todas las categorías:</h2>
        <div>
          {group.map(category => (
            <span key={category.fieldValue}>
              <CategoryLink cat={category.fieldValue}>
                {category.fieldValue} ({category.totalCount})
              </CategoryLink>
            </span>
          ))}
        </div>
      </>
    </StyledCategoryList>
  );
};

export default CategoryList;
