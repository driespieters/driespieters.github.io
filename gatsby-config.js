// Get variable from environment file
require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Dries Pieters`,
    description: `Portfolio of Dries Pieters`,
    author: `@driespieters`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dries Pieters`,
        short_name: `DriesPieters`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/assets/logo.svg`,
      },
    },
    {
     resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         "G-XZEL94LERW", // Google Analytics / GA
       ],
       // This object gets passed directly to the gtag config command
       // This config will be shared across all trackingIds
       gtagConfig: {
         optimize_id: "OPT_CONTAINER_ID",
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
