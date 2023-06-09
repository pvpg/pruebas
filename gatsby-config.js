require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SkyPoint`,
    description: `SkyPoint`,
    author: `@rezso.dubiczki`,
    siteUrl: `https://www.skypoint.com.au`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-20174112-1"],
          pluginConfig: {
            head: true
          }
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "skypoint-devp",
        customTypesApiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InNreXBvaW50LWRldnAtMzBiYTJmNjktZTA4Yi00MWJjLWEzNGMtNmM2MzU0ZDVhMzk5XzUiLCJkYXRlIjoxNjgxOTMzNjY5LCJkb21haW4iOiJza3lwb2ludC1kZXZwIiwiaWF0IjoxNjgxOTMzNjY5fQ.9Ji-vkTnVxU2E5g7PCeMXS1xX0feMA_MGkUguIIKk1w",
        linkResolver: require('./src/linkResolver').linkResolver,
        // releaseID: "ZCJ4yxAAAB8AvpFY"
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: "skypoint-devp",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InNreXBvaW50LWRldnAtMzBiYTJmNjktZTA4Yi00MWJjLWEzNGMtNmM2MzU0ZDVhMzk5XzUiLCJkYXRlIjoxNjgxOTMzNjY5LCJkb21haW4iOiJza3lwb2ludC1kZXZwIiwiaWF0IjoxNjgxOTMzNjY5fQ.9Ji-vkTnVxU2E5g7PCeMXS1xX0feMA_MGkUguIIKk1w",
        linkResolver: require('./src/linkResolver').linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -85,
        duration: 1000
      }
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon-512x512.png',
      },
    }
  ]
}