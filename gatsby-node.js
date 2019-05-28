const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const boosterTemplate = path.resolve(`src/templates/booster.js`)
  const response = await graphql(`
    query {
      allContentfulBooster {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBooster.edges.forEach(edge => {
    createPage({
      component: boosterTemplate,
      path: `/boosters/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
