import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';
import PostNav from '../components/PostNav';
import {
  StyledPost,
  StyledContent,
  StyledPostMeta,
} from '../components/styles/StyledPost';
import { TwitterIcon } from '../components/styles/TwitterIcon';

const PostTemplate = ({ data, pageContext }) => {
  const {
    childMarkdownRemark: { frontmatter, html, id },
  } = data.file;
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
        </div>

        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />

        <div className="twitter">
          {TwitterIcon}
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
