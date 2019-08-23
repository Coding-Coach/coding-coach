/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

// Adding the slug to each node, the slug is based on the file system
// under `content` folder.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const LegalTemplate = path.resolve(`src/templates/legal.js`)
  const PostTemplate = path.resolve(`src/templates/post.js`)

  const postsResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {fields: {slug: {regex: "/^\\/blog\\/.*/"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const legalResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {fields: {slug: {regex: "/^\\/legal\\/.*/"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (postsResult.errors) {
    console.log(postsResult.errors)
    throw new Error("Things broke while getting posts, see console output above")
  }

  if (legalResult.errors) {
    console.log(legalResult.errors)
    throw new Error("Things broke while getting legal pages, see console output above")
  }

  legalResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: LegalTemplate,
      context: {
        slug: node.fields.slug,
      }, // additional data can be passed via context
    })
  })

  postsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: PostTemplate,
      context: {
        slug: node.fields.slug,
      }, // additional data can be passed via context
    })
  })
}
