/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "../components/carousel"

const IndexPage = () => {

  const imagesData = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          img {
            childImageSharp {
              resize(height: 400,width: 1000) {
                src
              }
            }
          }
        }
      }
    }
  }
`)

  const images = imagesData.allMarkdownRemark.nodes

  console.log(images)

return <Layout>
    <SEO title="Home"/>
    <h1 sx={{textAlign: "center"}}>Welcome</h1>
    <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        paddingBottom: "30px"
      }}>
      <Carousel images = {images}/>
    </div>
    </Layout>
}

export default IndexPage
