import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryLink from '../components/CategoryLink';

const StyledBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledPost = styled.div`
  .meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .meta__cats {
      justify-self: end;
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
      {frontmatter.image && (
        <StyledBg>
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </StyledBg>
      )}
      <Layout isPost>
        <SEO
          title={frontmatter.seoTitle || frontmatter.title}
          description={frontmatter.description}
        />
        <StyledPost>
          <div className="breadcrumb">bread > crumb > irá aquí</div>
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
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
