import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
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
  const locale = es;

  return (
    <Layout type="post">
      <SEO
        title={frontmatter.seoTitle || frontmatter.title}
        description={frontmatter.description}
      />
      <StyledPost>
        <div className="post__header">
          <h1>{frontmatter.title}</h1>
          {/* <PostLiker id={id} /> */}
        </div>

        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />

        <div className="twitter">
          <svg
            className="twitter-logo"
            data-name="Logo — FIXED"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
          >
            <path fill="none" d="M0 0h400v400H0z" />
            <path
              d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23"
              fill="#1da1f2"
            />
          </svg>
          {frontmatter.twitter ? (
            <p>
              Ya estamos hablando sobre este tema en{' '}
              <a
                href={frontmatter.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              , únete a la discusión y cuéntanos tu opinión!
            </p>
          ) : (
            <p>
              No hay sección de comentarios, pero me encantaría escuchar tu
              opinión: escríbeme en{' '}
              <a
                href={`https://www.twitter.com/${data.site.siteMetadata.author}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              !
            </p>
          )}
        </div>

        <StyledPostMeta>
          <div className="meta__date">
            {frontmatter.previousDate ? (
              <>
                <p>
                  Actualizado:{' '}
                  <time dateTime={frontmatter.date}>
                    {format(new Date(frontmatter.date), `d 'de' MMMM, yyyy`, {
                      locale,
                    })}
                  </time>
                </p>
                <p className="updated">
                  Publicación original:{' '}
                  <time dateTime={frontmatter.previousDate}>
                    {format(
                      new Date(frontmatter.previousDate),
                      `d 'de' MMMM, yyyy`,
                      { locale }
                    )}
                  </time>
                </p>
              </>
            ) : (
              <p>
                Publicado:{' '}
                <time dateTime={frontmatter.date}>
                  {format(new Date(frontmatter.date), `d 'de' MMMM, yyyy`, {
                    locale,
                  })}
                </time>
              </p>
            )}
          </div>
          <div className="meta__cats">
            <p>
              En la{frontmatter.categories.length > 1 ? 's' : ''} categoría
              {frontmatter.categories.length > 1 ? 's' : ''}:
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
          date(formatString: "YYYY-MM-DD")
          previousDate(formatString: "YYYY-MM-DD")
          slug
          title
          seoTitle
          description
          categories
          twitter
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default PostTemplate;
