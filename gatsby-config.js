/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId
        accessToken
      },
    },
  ],
}
