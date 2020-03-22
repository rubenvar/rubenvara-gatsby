import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';
import StyledArchiveHeader from '../components/styles/StyledArchiveHeader';

const StyledCategoryList = styled.ul`
  margin: 0;
  padding: 0 0 0 30px;
  li {
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
    a {
      color: ${props => props.theme.primary600};
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.grey800};
      }
    }
  }
`;

const CategoriesPage = ({ data }) => {
  const { group } = data?.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Todas las categorías del blog" />
      <div>
        <StyledArchiveHeader>
          <h1>Todas las categorías del Blog:</h1>
        </StyledArchiveHeader>
        <StyledCategoryList>
          {group.map(category => (
            <li key={category.fieldValue}>
              <CategoryLink cat={category.fieldValue}>
                {category.fieldValue} ({category.totalCount})
              </CategoryLink>
            </li>
          ))}
        </StyledCategoryList>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
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
`;

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default CategoriesPage;
