import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { StyledContent } from '../components/styles/StyledPost';

const PageTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

  return (
    <Layout>
      <SEO
        title={frontmatter.seoTitle || frontmatter.title}
        description={frontmatter.description}
      />
      <h1>{frontmatter.title}</h1>
      {frontmatter.updated && (
        <p className="updated">Última actualización el {frontmatter.updated}</p>
      )}
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        updated(formatString: "D [de] MMMM [de] YYYY", locale: "es-ES")
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
