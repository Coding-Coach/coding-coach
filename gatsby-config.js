module.exports = {
  siteMetadata: {
    title: `Coding Coach`,
    description: `Connecting developers with mentors worldwide`,
    author: `@crysfel`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-133820299-1`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        icon: `src/assets/images/cc-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
