/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const kebabCase = require('lodash.kebabcase');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  const pageTemplate = path.resolve(`src/templates/page.js`);
  const categoryTemplate = path.resolve(`src/templates/category.js`);

  const { errors, data } = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          previous {
            frontmatter {
              slug
              title
            }
          }
          node {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = data.postsRemark.edges;
  posts.forEach(({ previous, node, next }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        next: previous,
        prev: next,
        // next and prev inverted to keep more logical order
      },
    });
  });

  const categories = data.categoriesGroup.group;
  categories.forEach(category => {
    createPage({
      path: `/categoria/${kebabCase(category.fieldValue)}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
