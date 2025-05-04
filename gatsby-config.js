require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "work-fluent",
    description: "A candycode-inspired Gatsby site with Contentful CMS.",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`, // For rich text formatting
    {
      resolve: `gatsby-plugin-fonts`,
      options: {
        google: {
          families: ['Inter']
        }
      }
    },
  ],
};
