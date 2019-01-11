module.exports = {
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/images`,
       name: 'images',
      },
    },
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/pages`,
       name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: `gatsby-remark-better-embed-video`,
          options: {
            width: 800,
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            showInfo: false
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
        },
        ]
      }
    },
  ],
}
