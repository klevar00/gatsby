/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            img {
              childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allMarkdownRemark.nodes

  console.log(images)

return <Layout>
    <SEO title="Home"/>
    <h1>Welcome</h1>
    {images.map(image => (
        <Img fluid={image.frontmatter.img.childImageSharp.fluid}
        ></Img>
    ))}
    </Layout>
}

export default IndexPage
