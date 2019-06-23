module.exports = {
  siteMetadata: {
    title: `Ristorante Vesuvio'79`,
    description: `[slogan]`,
    author: `Eneko`,
  },
  plugins: [
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
        name: `Ristorante Vesuvio'79`,
        short_name: `Vesuvio'79`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#DAA520`,
        display: `minimal-ui`,
        icon: `src/images/icon-vesuvio.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
