module.exports = {
  siteMetadata: {
    title: `Your Site Title`,
    description: `Your site description`,
    author: `Your Name`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `crb2bz1dypo5`,
        accessToken: `tzRzXeoBBAuLsuQFw1mYXtbE9x87x78-G5n0vKulDDc`,
      },
    },
  ],
};