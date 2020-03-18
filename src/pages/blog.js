import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ListedPost from '../components/ListedPost';

const BlogPage = ({
  data: {
    allPosts: { edges, totalCount },
  },
}) => {
  const Posts = edges
    // filter out draft posts
    .filter(edge => !edge.node.childMarkdownRemark.frontmatter.draft)
    // add categoria 'Otros' if no categories
    .map(edge => {
      if (!edge.node.childMarkdownRemark.frontmatter.categories) {
        edge.node.childMarkdownRemark.frontmatter.categories = [];
      }
      return edge;
    })
    .map(edge => (
      <ListedPost
        key={edge.node.childMarkdownRemark.id}
        post={edge.node.childMarkdownRemark}
      />
    ));

  return (
    <Layout isBlog>
      <h1>El Blog ({totalCount})</h1>
      <p>
        Dicen que no sabes lo que sabes hasta que intentas enseñarlo. Pues en
        eso estamos:
      </p>
      <div>{Posts}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allPosts: allFile(
      limit: 2000
      filter: { sourceInstanceName: { eq: "post" } }
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
