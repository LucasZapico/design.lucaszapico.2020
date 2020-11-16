const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    await createNodeField({
      node: node,
      name: `path`,
      value: value,
    })
    await createNodeField({
      node: node,
      name: `test-path`,
      value: node.frontmatter.value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const PostTemplate = path.resolve(`src/templates/postTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            html
            fields {
              path
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.path,
      component: PostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
