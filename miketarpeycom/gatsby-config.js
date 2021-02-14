/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "mike tarpey",
    navMetadata: [
      { name: "About", slug: "/" },
      { name: "Timeline", slug: "/timeline" },
      { name: "Friends", slug: "/friends" },
    ],
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
