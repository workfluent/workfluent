module.exports = {
  siteMetadata: {
    title: `Your Site Title`,
    description: `Your site description`,
    author: `Your Name`, // Added 'author' field
  },
  plugins: [
    `gatsby-plugin-image`, // Added gatsby-plugin-image
    `gatsby-plugin-sharp`, // Added gatsby-plugin-sharp
    `gatsby-plugin-react-helmet`, // Added gatsby-plugin-react-helmet
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `crb2bz1dypo5`, // Updated spaceId
        accessToken: `tzRzXeoBBAuLsuQFw1mYXtbE9x87x78-G5n0vKulDDc`, // Updated accessToken
      },
    },
  ],
};