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
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_ACCESS_TOKEN,
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
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: require('./src/linkResolver').linkResolver,
      },
    }
  ]
}