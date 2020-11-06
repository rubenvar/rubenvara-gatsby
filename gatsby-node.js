const path = require(`path`);
const kebabCase = require('lodash.kebabcase');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const blogTemplate = path.resolve(`src/templates/blog.js`);

  // Graphql query to get all posts + manage pagination + and create the posts and category pages
  const { errors, data } = await graphql(`
    {
      allPosts: allMdx(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
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
      categoriesGroup: allMdx(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  // Pagination:
  const posts = data.allPosts.edges;

  // create the blog pages
  // TODO not hardcoded here!
  const perPage = 2;
  const numPages = Math.ceil(posts.length / perPage);
  // array of blog pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // create the posts
  posts.forEach((post) => {
    // next and prev inverted to keep more logical order
    const next = post.next ? post.next : null;
    const prev = post.previous ? post.previous : null;

    createPage({
      path: post.node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        next,
        prev,
      },
    });
  });

  // create the categories
  const categories = data.categoriesGroup.group;
  categories.forEach((category) => {
    createPage({
      path: `/categoria/${kebabCase(category.fieldValue)}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};

// define graphql data template to avoid errors when 'twitter' field is not mentioned in any file's frontmatter
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      twitter: String
    }
  `;
  createTypes(typeDefs);
};

// https://github.com/gatsbyjs/gatsby/issues/564#issuecomment-527891177
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};
