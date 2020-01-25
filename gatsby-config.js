/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Taste for Traveling',
    author: 'Douglas Odell',
    social: {
      youtube: 'https://www.youtube.com/channel/UC2cpbcMO2louHxVZob43iEw',
      facebook: 'https://www.facebook.com/TasteforTraveling/',
      instagram: 'https://www.instagram.com/tastefortraveling/',
      instagramHandle: 'tastefortraveling'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-156977765-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 200,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `tastefortraveling`,
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: 'UC2cpbcMO2louHxVZob43iEw',
        apiKey: process.env.YOUTUBE_BUILDTIME_API_KEY,
        maxVideos: 10
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2560,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
