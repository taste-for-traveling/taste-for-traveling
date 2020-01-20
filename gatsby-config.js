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
      instagram: 'https://www.instagram.com/tastefortraveling/'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
