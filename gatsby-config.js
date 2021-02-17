/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: "mike tarpey",
    siteTitleAlt: "mike tarpey",
    siteUrl: "https://miketarpey.com",
    siteDescription: "Mike Tarpey, a pretty ordinary citizen of planet Earth. Credentialed actuary, aspiring programmer, casual Twitch streamer, UConn alum.",
    siteLanguage: "en-US",
    siteImage: "/mike-tarpey-headshot-20200427.jpg",
    author: "mike tarpey",
    navMetadata: [
      { name: "home", slug: "/" },
      { name: "about", slug: "/about" },
      { name: "timeline", slug: "/timeline" },
      { name: "friends", slug: "/friends" },
      { name: "credits", slug: "/credits" },
    ],
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-shoelace",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VKM4EF8JGK", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
