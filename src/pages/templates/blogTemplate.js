/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { Grid } from "@theme-ui/components"

export default function Template({ data }) {
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
          my: 3,
        }}
      >
        <h3 sx={{ textAlign: "center", mt: 3 }}>
          <b>{frontmatter.title}</b>
        </h3>
        {/* <HorizontalCard data={frontmatter}></HorizontalCard> */}

        <Img
          sx={{
            mb: 5,
            mt: 4,
            mx: "auto",
            maxWidth: ["100%", "70%"],
          }}
          fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
        />
        <div
          sx={{
            order: 1,
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
