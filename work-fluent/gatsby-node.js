/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  console.log('Styled-components resolved path:', require.resolve('styled-components'));
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'styled-components': require.resolve('styled-components'),
      },
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  if (page.path === "/404.html") {
    deletePage(page);
    createPage({
      ...page,
      component: path.resolve('./src/pages/404-lazy.js'), // Use a compatible 404 page
      context: {
        ...page.context,
      },
    });
  }
};
