import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ListedPost from '../components/ListedPost';
import StyledArchiveHeader from '../components/styles/StyledArchiveHeader';

const BlogPage = ({ data: { allPosts } }) => {
  const { totalCount } = allPosts;
  const edges = allPosts.edges.map(edge => {
    if (!edge.node.childMarkdownRemark.frontmatter.categories) {
      edge.node.childMarkdownRemark.frontmatter.categories = [];
    }
    return edge;
  });

  return (
    <Layout type="blog">
      <StyledArchiveHeader className="header">
        <h1>El Blog ({totalCount})</h1>
        <p>
          Dicen que no sabes lo que sabes hasta que intentas enseñarlo. Pues en
          eso estamos:
        </p>
      </StyledArchiveHeader>
      <div>
        {edges.map(edge => (
          <ListedPost
            key={edge.node.childMarkdownRemark.id}
            post={edge.node.childMarkdownRemark}
          />
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allPosts: allFile(
      filter: {
        sourceInstanceName: { eq: "post" }
        childMarkdownRemark: { frontmatter: { draft: { eq: false } } }
      }
      sort: { order: DESC, fields: [childMarkdownRemark___frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          childMarkdownRemark {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              date(formatString: "DD-MMM-YYYY", locale: "es-ES")
              slug
              title
              description
              categories
              draft
            }
            fields {
              readingTime {
                minutes
              }
            }
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.any,
};

export default BlogPage;
