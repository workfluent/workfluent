/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'WorkFluent',
    description: 'We craft alternative brands and wicked-fast websites. Let\'s delight your customers and accelerate your business!',
    siteUrl: 'https://workfluent.com',
  },
  pathPrefix: "/workfluent",
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-XXXXXXXXXX', // Replace with your Google Analytics ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
