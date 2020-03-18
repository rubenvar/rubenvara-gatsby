import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ListedPost from '../components/ListedPost';

const Category = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const title = `${totalCount} artículo${
    totalCount === 1 ? '' : 's'
  } en "${category}"`;

  return (
    <Layout>
      <SEO title={`Todos los posts en la categoría ${category}`} />
      <h1>{title}</h1>
      {edges.map(({ node }) => (
        <ListedPost key={node.id} post={node} />
      ))}
      <Link to="/categorias">Todas las categorías</Link>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
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

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              description: PropTypes.string,
              categories: PropTypes.array.isRequired,
            }),
            fields: PropTypes.shape({
              readingTime: PropTypes.shape({
                minutes: PropTypes.number,
              }),
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};
