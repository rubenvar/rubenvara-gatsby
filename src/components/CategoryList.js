import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryLink from './CategoryLink';

const StyledCategoryList = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  span {
    margin: 14px 10px;
    a {
      padding: 5px;
      color: ${props => props.theme.primary600};
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.grey100};
        background-color: ${props => props.theme.primary600};
      }
    }
  }
`;

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { draft: { eq: false } } }
      ) {
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
      {group.map(category => (
        <span key={category.fieldValue}>
          <CategoryLink cat={category.fieldValue}>
            {category.fieldValue} ({category.totalCount})
          </CategoryLink>
        </span>
      ))}
    </StyledCategoryList>
  );
};

export default CategoryList;
