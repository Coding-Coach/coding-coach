
const config = {
  siteMetadata: {
    title: `Coding Coach`,
    description: `Connecting developers with mentors worldwide`,
    author: `@crysfel`,
    siteUrl: `https://codingcoach.io/`,
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
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
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `coding-coach`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coding Coach`,
        short_name: `Coding Coach`,
        start_url: `/`,
        background_color: `#20293a`,
        theme_color: `#20293a`,
        display: `standalone`,
        icon: `src/assets/images/cc-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push({
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      // develop: true, // Enable while using `gatsby develop`
      tailwind: true, // Enable tailwindcss support
      whitelist: ['.blog-content'], // Don't remove this selector
      whitelistPatternsChildren: [/^pre/, /^code/], 
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    }
  })
}

module.exports = config
