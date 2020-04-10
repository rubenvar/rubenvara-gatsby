import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import ListedPost from '../components/ListedPost';
import Pagination from '../components/Pagination';
import StyledArchiveHeader from '../components/styles/StyledArchiveHeader';

const Blog = ({ data: { allPosts }, pageContext }) => {
  const { totalCount } = allPosts;
  const edges = allPosts.edges.map(edge => {
    if (!edge.node.childMarkdownRemark.frontmatter.categories) {
      edge.node.childMarkdownRemark.frontmatter.categories = [];
    }
    return edge;
  });

  return (
    <Layout type="blog">
      <SEO
        title={`Página ${pageContext.currentPage} de ${pageContext.numPages} ~ Todos los posts del blog`}
      />
      <StyledArchiveHeader className="header">
        <h1>El Blog</h1>
        <p>
          Dicen que no sabes lo que sabes hasta que intentas enseñarlo. Pues en
          eso estamos.
        </p>
        <p>
          Escribo sobre desarrollo web. Y sobre Javascript. Sobre todo,
          Javascript.
        </p>
      </StyledArchiveHeader>
      {edges.map(({ node }) => (
        <ListedPost
          key={node.childMarkdownRemark.id}
          post={node.childMarkdownRemark}
        />
      ))}
      <Pagination totalCount={totalCount} pageContext={pageContext} />
    </Layout>
  );
};

export const blogQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allPosts: allFile(
      filter: {
        sourceInstanceName: { eq: "post" }
        childMarkdownRemark: { frontmatter: { draft: { eq: false } } }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          childMarkdownRemark {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              date(formatString: "YYYY-MM-DD")
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

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default Blog;
