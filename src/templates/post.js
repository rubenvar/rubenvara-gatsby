import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash.kebabcase';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
              📖 {fields.readingTime.words} palabras = {minutes} minuto
              {minutes > 1 && 's'}
            </p>
          </div>
          <div className="meta__cats">
            {frontmatter.categories.map((cat, i) => (
              <p key={i}>
                <Link to={`/categoria/${kebabCase(cat)}`}>{cat}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPost>
    </Layout>
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
