require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Simple Blog`,
    description: `A Simple Blog created using Gatsby JS`,
    author: `Sebastian Burzych`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qckrg0qo83qb`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-js-blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `./src/favicon.png` // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: './src/favicon.png',
      // WebApp Manifest Configuration
      appName: 'gatsby-js-blog', // Inferred with your package.json
      appDescription: 'A simple blog created using Gatsby',
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',
 
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'SimpleBlog',
      short_name: 'SimpleBlog',
      start_url: '/',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      display: 'minimal-ui',
      icon: 'src/favicon.png', // This path is relative to the root of the site.
    }
  },
  'gatsby-plugin-offline',
  `gatsby-plugin-netlify`
  ],
}
