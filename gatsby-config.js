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
  ],
}
