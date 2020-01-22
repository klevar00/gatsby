/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import { Card, Grid } from "@theme-ui/components"

export default function Template({ data }) {
  console.log("---------- DATA:", data)

  if (data.markdownRemark === null || data.markdownRemark === undefined)
    return null

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { img, title, recipe } = frontmatter

  // console.log({html})
  // console.log({markdownRemark})

  return (
    <Layout>
      {/* <div className="blog-post-container">
            <div className="blog-post">
              <h1>{frontmatter.title}</h1>
            </div>
          </div> */}

      <div sx={{ margin: "0 auto" }}>
        <h3 sx={{ textAlign: "center", my: "5" }}> Eat good, feel good! </h3>
        <HorizontalCard data={frontmatter}></HorizontalCard>

        <p sx={{ my: 10 }}> {recipe} </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        recipe
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const HorizontalCard = ({ data }) => {
  const { img, title } = data

  console.log({ img })
  return (
    <Grid gap={[1]} columns={[1, 1, 2, 2]} sx={{ mb: 5 }}>
      <div sx={{ mx: "1em", width: "80%", m: 100 }}>
        <h3>{title}</h3>
        <p>30 min</p>
      </div>

      <Img
        sx={{ m: 3 }}
        // fixed={img.childImageSharp.fixed}
        // fluid={img.childImageSharp.fluid}

        fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
      />
    </Grid>
  )
}
