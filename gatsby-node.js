/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const kebabCase = require('lodash.kebabcase');

const proyectosData = require('./src/utils/proyectosData');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const proyectos = proyectosData;

  proyectos.forEach(proyecto => {
    const { name, intro, images, description, tags } = proyecto;
    const node = {
      id: createNodeId(`proyecto-${name}`),
      name,
      intro,
      images,
      description,
      tags,
      internal: {
        type: `proyecto`,
        contentDigest: createContentDigest(proyecto),
      },
    };
    actions.createNode(node);
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  const pageTemplate = path.resolve(`src/templates/page.js`);
  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const blogListTemplate = path.resolve(`src/templates/blog.js`);

  // use allFile on the queries instead of the default gatsby docs query to separate between pages and posts
  const { errors, data } = await graphql(`
    {
      allPostsRemark: allFile(
        limit: 1000
        filter: {
          sourceInstanceName: { eq: "post" }
          childMarkdownRemark: { frontmatter: { draft: { eq: false } } }
        }
        sort: {
          order: DESC
          fields: [childMarkdownRemark___frontmatter___date]
        }
      ) {
        edges {
          previous {
            childMarkdownRemark {
              frontmatter {
                slug
                title
              }
            }
          }
          node {
            childMarkdownRemark {
              frontmatter {
                slug
              }
            }
          }
          next {
            childMarkdownRemark {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
      allPagesRemark: allFile(filter: { sourceInstanceName: { eq: "page" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                slug
              }
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

  const posts = data.allPostsRemark.edges;
  const perPage = 6;
  const numPages = Math.ceil(posts.length / perPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach(post => {
    // next and prev inverted to keep more logical order
    const next = post.next ? post.next.childMarkdownRemark : null;
    const prev = post.previous ? post.previous.childMarkdownRemark : null;

    createPage({
      path: post.node.childMarkdownRemark.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.childMarkdownRemark.frontmatter.slug,
        next,
        prev,
      },
    });
  });

  const pages = data.allPagesRemark.edges;
  pages.forEach(({ node }) =>
    createPage({
      path: node.childMarkdownRemark.frontmatter.slug,
      component: pageTemplate,
      context: {
        slug: node.childMarkdownRemark.frontmatter.slug,
      },
    })
  );

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
