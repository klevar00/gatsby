/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { Card, Grid } from "@theme-ui/components"

import { RecipeCards } from "../../components/recipeCards"

export default function Template({ data }) {
  console.log("---------- DATA:", data)

  if (data.markdownRemark === null || data.markdownRemark === undefined)
    return null

  const { markdownRemark, popularRecipes } = data
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
        <h3 sx={{ textAlign: "center", mt: 3 }}> {frontmatter.title} </h3>
        {/* <HorizontalCard data={frontmatter}></HorizontalCard> */}

        <Img
          // fixed={img.childImageSharp.fixed}
          // fluid={img.childImageSharp.fluid}

          sx={{
            mb: 5,
            mt: 4,
            mx: "auto",
            maxWidth: ["100%", "70%"],
          }}
          fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
        />

        <Grid
          gap={4}
          columns={[1, 2]}
          sx={{ maxWidth: ["100%", "90%"], m: "0 auto" }}
        >
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
      <div
        sx={{
          maxWidth: "container",
          mx: "auto",
          my: 3,
        }}
      >
        <h2 sx={{ textAlign: "left", mb: 2 }}>Similar recipes</h2>
        <RecipeCards recipes={popularRecipes.nodes} />
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

    popularRecipes: allMarkdownRemark(
      limit: 4
      filter: { fileAbsolutePath: { regex: "//markdown-pages/recipes/" } }
    ) {
      nodes {
        id
        frontmatter {
          path
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
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
