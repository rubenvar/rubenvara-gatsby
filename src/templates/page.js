import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <p>a page!</p>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        seoTitle
        description
      }
    }
  }
`;

PageTemplate.propTypes = {
  data: PropTypes.object,
};

export default PageTemplate;
