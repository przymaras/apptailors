module.exports = {
  siteMetadata: {
    title: "AppTailors | Mobile and web app development agency",
    author: {
      name: `John Doe`,
      summary: `We design, build and launch Tailor Made digital products`,
    },
    description: `High-quality product design and development`,
    siteUrl: `https://apptailors.co`,
    social: {
      twitter: `apptailors`,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
