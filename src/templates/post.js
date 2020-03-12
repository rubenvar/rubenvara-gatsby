import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const StyledPost = styled.div`
  /* max-width: 960px;
  margin: 0 auto; */
`;

function PostTemplate({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below. data.markdownRemark holds your post data
}) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout isPost>
      <SEO
        title={frontmatter.seoTitle || frontmatter.title}
        description={frontmatter.description}
      />
      <StyledPost>
        <div id="post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div id="post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </StyledPost>
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.any,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
        slug
        title
        seoTitle
        description
      }
    }
  }
`;

export default PostTemplate;
