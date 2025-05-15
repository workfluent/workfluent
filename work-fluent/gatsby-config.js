module.exports = {
  siteMetadata: {
    title: `Your Site Title`,
    description: `Your site description`,
    author: `Your Name`,
  },
  pathPrefix: "/workfluent", // Ensure this matches your GitHub repository name
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`, // Ensure PostCSS plugin is included for Tailwind CSS
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