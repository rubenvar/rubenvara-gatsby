import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "es-ES")
            slug
            title
            description
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
