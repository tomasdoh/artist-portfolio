module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
     resolve: `gatsby-source-contentful`,
     options: {
       spaceId: `fqdt5x5nnmve`,
       accessToken: `13cd7b35c7391a0a0f0d5d888eac2e1476e3f7cd3e1dd1527d7230711289494f`,
      },
    },
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/images`,
      name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
