import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
// import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';

// const StyledBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `;

const StyledPost = styled.div`
  .breadcrumb {
    &__link {
    }
    &__sep {
    }
  }
  .meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .meta__cats {
      justify-self: end;
    }
  }
`;

const StyledContent = styled.div`
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: 42px 0 20px;
    font-size: 36px;
  }
  h3 {
    margin: 32px 0 16px;
    font-size: 27px;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 1.8rem;
    a {
      color: ${props => props.theme.primary500};
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
      }
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
      {/* {frontmatter.image && (
        <StyledBg>
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </StyledBg>
      )} */}
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
            <span className="breadcrumb__link__active">
              {frontmatter.title}
            </span>
          </div>
          <h1>{frontmatter.title}</h1>
          <div className="meta">
            <div className="meta__data">
              <p>✏️ {frontmatter.date}</p>
              <p>
                📖 {fields.readingTime.words} palabras = menos de {minutes}{' '}
                minuto
                {minutes > 1 && 's'}
              </p>
            </div>
            <div className="meta__cats">
              {frontmatter.categories.map((cat, i) => (
                <p key={i}>
                  <CategoryLink cat={cat}>{cat}</CategoryLink>
                </p>
              ))}
            </div>
          </div>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
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
