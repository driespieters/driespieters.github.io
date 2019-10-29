module.exports = {
  siteMetadata: {
    title: `Dries Pieters`,
    description: `Portfolio of Dries Pieters`,
    author: `@driespieters`,
    menuLinks:[
      {
        name:'work',
        link:'/work'
     },
     {
       name:'profile',
       link:'/profile'
     },
     {
       name:'blog',
       link:'/blog'
     },
      {
        name:'contact',
        link:'/contact'
       }
    ]
  },
  plugins: [
    `gatsby-plugin-netlify`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
