module.exports = {
  siteMetadata: {
    title: `Kayla Sween`,
    description: `Kayla Sween's website. It contains Kayla's current and past projects and tells you about her life.`,
    author: `@kaylasween`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-monetization`,
      options: {
        paymentPointer: `$ilp.uphold.com/p4phbPxWNMB7`,
        excludedPaths: ['src/pages/index.js', 'src/pages/talks.js', 'src/pages/powerlifting.js', 'src/pages/contact.js', 'src/pages/about.js', 'src/pages/404.js'] // Optional
      }
    },
    // {
    //   resolve: "gatsby-source-dev",
    //   options: {
    //     // This is your username on Dev.to
    //     username: 'kaylasween'
    //   }
    // },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}