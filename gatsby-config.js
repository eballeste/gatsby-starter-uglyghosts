module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description: 'gatsby starter with sass & css-modules',
    keywords: 'gatsby starter sass css-modules',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: `${__dirname}/src/components`,
        styles: `${__dirname}/src/styles`,
      },
    },
  ],
}
