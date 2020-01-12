import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Template({ data,}) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return <Layout>
          <div className="blog-post-container">
            <div className="blog-post">
              <h1>{frontmatter.title}</h1>
            </div>
          </div>
    </Layout>

}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`