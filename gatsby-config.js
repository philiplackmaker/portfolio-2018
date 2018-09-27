module.exports = {
  siteMetadata: {
    title: "Philip Lackmaker Portfolio"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "d7vu7om5"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080
            }
          }
        ]
      }
    }
  ]
};
