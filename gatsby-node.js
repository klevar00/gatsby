const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/pages/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "//markdown-pages/blog-posts/"}},
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const recipeTemplate = path.resolve(`src/pages/templates/recipeTemplate.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}},
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: recipeTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  }