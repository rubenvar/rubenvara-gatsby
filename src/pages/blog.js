import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ListedPost from '../components/ListedPost';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ListedPost key={edge.node.id} post={edge.node} />);

  return (
    <Layout isBlog>
      <h2>El Blog</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        aliquid, ullam incidunt autem blanditiis ut ea officia laboriosam
        voluptates voluptatum accusamus quia! Voluptas expedita a possimus
        aperiam nobis, aspernatur eaque!
      </p>
      <div>{Posts}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD-MMM-YYYY", locale: "es-ES")
            slug
            title
            description
            categories
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
`;

BlogPage.propTypes = {
  data: PropTypes.any,
};

export default BlogPage;