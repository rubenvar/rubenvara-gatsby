import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Inner from '../components/Inner';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';

const StyledBg = styled.div``;

const StyledPost = styled.div``;

const StyledPostTop = styled.div`
  position: relative;
  .bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* display: grid;
    justify-items: center;
    align-items: center; */
  }
  .top {
    max-width: 80%;
    padding: 30px 0 60px;
    margin: 0 auto;
    position: relative;
    .breadcrumb {
      color: ${props => props.theme.grey500};
      font-size: 0.75rem;
      margin-bottom: 30px;
      a {
        color: ${props => props.theme.grey500};
        text-decoration: none;
      }
      &__link {
      }
      &__sep {
        margin: 0 6px;
        font-size: 0.6rem;
      }
    }
    h1 {
      text-align: center;
      font-family: 'Victor Mono', monospace;
      font-size: 2.4rem;
      margin: 0 0 20px;
      font-weight: 400;
      letter-spacing: -4px;
    }
    .meta {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      color: ${props => props.theme.grey500};
      font-size: 0.85rem;
      &__read {
        justify-self: center;
      }
      .meta__cats {
        text-align: right;
        justify-self: end;
        p {
          margin: 0;
          a {
            color: ${props => props.theme.grey500};
          }
        }
      }
    }
    .description {
      font-family: 'Victor Mono', monospace;
    }
  }
`;

const StyledContent = styled.div`
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: 42px 0 20px;
    font-size: 1.8rem;
    font-family: 'Victor Mono', monospace;
  }
  h3 {
    margin: 32px 0 16px;
    font-size: 1.35rem;
    font-family: 'Victor Mono', monospace;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 1.8rem;
    a {
      /* color: ${props => props.theme.primary500};
      position: relative;
      text-decoration: none;
      padding: 0 1px;
      &::after {
        position: absolute;
        background: linear-gradient(
          to right,
          ${props => props.theme.primary500},
          ${props => props.theme.primary700}
        );
        content: '';
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        z-index: -1;
        transition: all 0.25s;
      }
      &:hover {
        color: ${props => props.theme.white};
        border-color: transparent;

        &::after {
          height: 100%;
        }
      }
      &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.grey900};
        border-radius: 3px;
        transition: none;
      } */
    }
  }
  ul {
    /* list-style: none; */
    line-height: 1.4rem;
    margin: 0 0 20px;
    li {
      margin: 0 0 12px;
      &::marker {
        color: ${props => props.theme.primary500};
      }
    }
  }
  blockquote {
    margin: 30px 0;
    padding: 20px 0 20px 30px;
    border-left: 3px solid ${props => props.theme.grey600};
    font-weight: 700;
    background-color: ${props => props.theme.grey200};
    color: ${props => props.theme.grey600};
    p {
      font-size: 25px;
      margin: 0;
    }
  }
`;

function PostTemplate({
  data: { markdownRemark }, // this prop will be injected by the GraphQL query below. data.markdownRemark holds your post data
}) {
  const { frontmatter, fields, html } = markdownRemark;
  const minutes = Math.ceil(fields.readingTime.minutes);

  return (
    <Fragment>
      <Layout isPost>
        <SEO
          title={frontmatter.seoTitle || frontmatter.title}
          description={frontmatter.description}
        />
        <StyledPost>
          <StyledPostTop>
            {frontmatter.image && (
              <div className="bg">
                <Img fluid={frontmatter.image.childImageSharp.fluid} />
              </div>
            )}
            <div className="top">
              <div className="breadcrumb" aria-label="Breadcrumb">
                <Link className="breadcrumb__link" to="/">
                  Inicio
                </Link>
                <span className="breadcrumb__sep">></span>
                <Link className="breadcrumb__link" to="/blog">
                  Blog
                </Link>
                <span className="breadcrumb__sep">></span>
                <span className="breadcrumb__link__active">
                  {frontmatter.title}
                </span>
              </div>
              <h1>{frontmatter.title}</h1>
              <div className="meta">
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
                <p className="meta__read">
                  menos de {minutes} minuto{minutes > 1 && 's'}
                </p>
                <div className="meta__cats">
                  {frontmatter.categories.map((cat, i) => (
                    <p key={i}>
                      <CategoryLink cat={cat}>
                        #{cat.toLowerCase()}
                      </CategoryLink>
                    </p>
                  ))}
                </div>
              </div>
              <div className="description">
                <p>{frontmatter.description}</p>
              </div>
            </div>
          </StyledPostTop>
          <Inner>
            <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
          </Inner>
        </StyledPost>
      </Layout>
    </Fragment>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.any,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
        updated(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
        slug
        title
        seoTitle
        description
        categories
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          minutes
          words
        }
      }
    }
  }
`;

export default PostTemplate;
