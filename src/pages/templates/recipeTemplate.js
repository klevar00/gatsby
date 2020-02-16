/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import { Card, Grid } from "@theme-ui/components"
import { useRef } from "react"
import { useEffect } from "react"
import { useWindowSize } from "../../hooks/index"

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
      <div
        sx={{
          width: "100%",
          maxWidth: "container",
          margin: "0 auto",
          borderBottom: "1px solid orange",
          paddingBottom: "30px",
          mt: "3",
        }}
      >
        <h3 sx={{ textAlign: "center" }}> {frontmatter.title} </h3>
        {/* <HorizontalCard data={frontmatter}></HorizontalCard> */}

        <Img
          // fixed={img.childImageSharp.fixed}
          // fluid={img.childImageSharp.fluid}

          sx={{
            my: 5,
            mx: "auto",
            maxWidth: ["100%", "80%"],
          }}
          fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
        />

        <Grid gap={4} columns={[1, 2]}>
          <div
            sx={{
              order: 1,
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p
            sx={{
              order: 2,
            }}
          >
            {frontmatter.recipe}
          </p>
        </Grid>
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
