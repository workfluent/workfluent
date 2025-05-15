require("dotenv").config({ path: `${__dirname}/../.env` }); // Explicitly load the .env file from the parent directory

console.log("DEBUG: Loading environment variables...");
console.log("Contentful Space ID:", process.env.CONTENTFUL_SPACE_ID || "NOT SET");
console.log("Contentful Access Token:", process.env.CONTENTFUL_ACCESS_TOKEN || "NOT SET");

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.error("Error: Contentful environment variables are not set.");
  process.exit(1); // Exit the process if variables are not set
}

module.exports = {
  siteMetadata: {
    title: `Work Fluent`,
    description: `A Gatsby project.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/workfluent", // Ensure this matches your GitHub repository name
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`, // Ensure PostCSS plugin is included for Tailwind CSS
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "undefined", // Use environment variable
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "undefined", // Use environment variable
      },
    },
  ],
};