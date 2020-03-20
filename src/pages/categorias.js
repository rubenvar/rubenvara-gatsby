import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';
import StyledArchiveHeader from '../components/styles/StyledArchiveHeader';

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <div>
      <StyledArchiveHeader>
        <h1>Todas las Categorías</h1>
      </StyledArchiveHeader>
      <ul>
        {group.map(category => (
          <li key={category.fieldValue}>
            <CategoryLink cat={category.fieldValue}>
              {category.fieldValue} ({category.totalCount})
            </CategoryLink>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
