import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/SEO';
import PostNav from '../components/PostNav';
import PostHeader from '../components/styles/PostHeader';
import PostMeta from '../components/PostMeta';
import TwitterBox from '../components/TwitterBox';

function PostTemplate({ data, pageContext }) {
  const { frontmatter, body } = data.post;
  const { prev, next } = pageContext;

  return (
    <>
      <SEO
        title={frontmatter.seoTitle || frontmatter.title}
        description={frontmatter.description}
      />

      <PostHeader>
        <h1>{frontmatter.title}</h1>
        <PostMeta date={frontmatter.date} cats={frontmatter.categories} />
      </PostHeader>

      <MDXRenderer>{body}</MDXRenderer>

      <PostMeta date={frontmatter.date} cats={frontmatter.categories} />

      <TwitterBox twitter={frontmatter.twitter} />

      <PostNav prev={prev} next={next} />
    </>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
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
`;

export default PostTemplate;
