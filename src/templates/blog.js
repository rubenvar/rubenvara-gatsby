import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import ListedPost from '../components/ListedPost';
import Pagination from '../components/Pagination';
import ArchiveHeader from '../components/styles/ArchiveHeader';
import Emphasis from '../components/md/Emphasis';

export default function Blog({ data, pageContext }) {
  if (!data) return <p>No hay posts... 🤷‍♂️</p>;

  const { totalCount, edges } = data.allPosts;
  const posts = edges.map((edge) => {
    if (!edge.node.frontmatter.categories) {
      edge.node.frontmatter.categories = [];
    }
    return edge;
  });

  return (
    <>
      <SEO
        title={`Página ${pageContext.currentPage} de ${pageContext.numPages} ~ Todos los posts del blog`}
        slug="blog"
      />
      <ArchiveHeader className="header">
        <p>
          Dicen que no sabes lo que sabes hasta que intentas enseñarlo, así que
          en eso estamos:
        </p>
        <p>
          Escribo sobre desarrollo web en español pero me falta vocabulario,
          porque todo lo que sé lo he aprendido en inglés.
        </p>
        <p>
          Si te quedas por aquí seguro que aprendes algo nuevo sobre JavaScript.
          Sobre todo, <Emphasis use="js">JavaScript</Emphasis>.
        </p>
      </ArchiveHeader>
      {posts &&
        posts.map(({ node: post }) => <ListedPost key={post.id} post={post} />)}
      <Pagination totalCount={totalCount} pageContext={pageContext} />
    </>
  );
}

export const blogQuery = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allPosts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
