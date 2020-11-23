import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import ListedPost from '../components/ListedPost';
import ArchiveHeader from '../components/styles/ArchiveHeader';
import { categoryDescriptions } from '../utils';
import CategoryList from '../components/CategoryList';

const Category = ({ data, pageContext }) => {
  if (!data) return <p>No hay posts... 🤷‍♂️</p>;

  const { category } = pageContext;
  const { totalCount, edges: posts } = data.allPostsInCategory;

  const description = categoryDescriptions.find(
    (obj) => obj.category.toLowerCase() === category.toLowerCase()
  )?.description;

  return (
    <>
      <SEO title={`Todos los posts en la categoría ${category}`} />

      <ArchiveHeader className="header">
        <h1>
          {totalCount} artículo{totalCount !== 1 ? 's' : ''} en{' '}
          <span>{category}</span>
        </h1>
        {description && <p>{description}</p>}
      </ArchiveHeader>

      {posts.map(({ node: post }) => (
        <ListedPost key={post.id} post={post} />
      ))}

      <CategoryList current={category} />
    </>
  );
};

export const pageQuery = graphql`
  query($category: String) {
    allPostsInCategory: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
            description
            categories
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
    allPostsInCategory: PropTypes.shape({
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
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Category;
