const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const getSlugFromFilePath = require("./src/utils/getSlugFromFilePath");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/article.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            id
            html
            fileAbsolutePath
            frontmatter {
              title
              date
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const articles = result.data.allMarkdownRemark.nodes;

  articles.forEach((article, index) => {
    const previous = index === articles.length - 1 ? null : articles[index + 1].node;
    const next = index === 0 ? null : articles[index - 1].node;

    createPage({
      path: `articles/${getSlugFromFilePath(article.fileAbsolutePath)}`,
      component: blogPost,
      context: {
        article,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
