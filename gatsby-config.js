module.exports = {
  siteMetadata: {
    title: `ERecipes`,
    description: `All Recipes In One Place.`,
    menuItems: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Recipes",
        path: "/recipes",
      },
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: "VideoCook",
        path: "/videocook",
      },
      {
        text: "Login",
        path: "/login",
      }
    ],
    author: `Levarda&Prpa`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ERecipes`,
        short_name: `ERecipes`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
