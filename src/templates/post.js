import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';
import PostNav from '../components/PostNav';
import PostLiker from '../components/PostLiker';
import {
  StyledPost,
  StyledContent,
  StyledPostMeta,
} from '../components/styles/StyledPost';

const PostTemplate = ({ data, pageContext }) => {
  const {
    childMarkdownRemark: { frontmatter, html, id },
  } = data.file; // this prop will be injected by the GraphQL query below. data.markdownRemark holds your post data
  const { prev, next } = pageContext;

  return (
    <Layout isPost>
      <SEO
        title={frontmatter.seoTitle || frontmatter.title}
        description={frontmatter.description}
      />
      <StyledPost>
        <div className="breadcrumb" aria-label="Breadcrumb">
          <Link className="breadcrumb__link" to="/">
            Inicio
          </Link>
          <span className="breadcrumb__sep">></span>
          <Link className="breadcrumb__link" to="/blog">
            Blog
          </Link>
          <span className="breadcrumb__sep">></span>
          <span className="breadcrumb__link__active">{frontmatter.title}</span>
        </div>
        <h1>{frontmatter.title}</h1>
        <PostLiker id={id} />

        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />

        <p>
          Lo discutimos en <a href="https://www.twitter.com/">Twitter</a>
        </p>

        <StyledPostMeta>
          <div className="meta__date">
            {frontmatter.updated ? (
              <Fragment>
                <p>Actualizado: {frontmatter.updated}</p>
                <p>Publicado: {frontmatter.date}</p>
              </Fragment>
            ) : (
              <p>{frontmatter.date}</p>
            )}
          </div>
          <div className="meta__cats">
            <p>
              Categorías:
              {frontmatter.categories.map((cat, i) => (
                <span key={i}>
                  <CategoryLink cat={cat}>#{cat.toLowerCase()}</CategoryLink>
                </span>
              ))}
            </p>
          </div>
        </StyledPostMeta>
        <PostNav prev={prev} next={next} />
      </StyledPost>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String!) {
    file(
      sourceInstanceName: { eq: "post" }
      childMarkdownRemark: { frontmatter: { slug: { eq: $slug } } }
    ) {
      childMarkdownRemark {
        id
        html
        frontmatter {
          date(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
          updated(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
          slug
          title
          seoTitle
          description
          categories
        }
      }
    }
  }
`;

export default PostTemplate;
