/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Carousel from "../components/carousel"
import { BlogCard } from "../components/themeUIComponents"
import { RecipeCards } from "../components/recipeCards"
import { Card, Grid } from "@theme-ui/components"
import Img from "gatsby-image"

const Blog = ({ data }) => {
  const { blogPosts } = data

  const firstBlog = blogPosts.nodes[0]
  const secondBlog = blogPosts.nodes[1]
  const thridBlog = blogPosts.nodes[2]

  console.log("fortsrda", blogPosts)

  return (
    <Layout>
      <SEO title="Blog" />

      <div
        sx={{
          width: ["100%", "90%"],
          maxWidth: "container",
          margin: "0 auto",
          py: "30px",
          mt: "3",
        }}
      >
        <div sx={{ width: ["90%", "70%"], mx: "auto" }}>
          <Img
            sx={{ m: 3 }}
            fluid={{
              ...firstBlog.frontmatter.img.childImageSharp.fluid,
              aspectRatio: 21 / 10,
            }}
          />
          <b>
            <h3 sx={{ textAlign: "center", fontWeight: "bold" }}>
              {firstBlog.frontmatter.title}
            </h3>
          </b>
        </div>
        <Grid gap={[2]} columns={[1, 3, 3]} sx={{ mx: "auto", my: 5 }}>
          <div>
            <Img
              sx={{ m: 3 }}
              fluid={{
                ...secondBlog.frontmatter.img.childImageSharp.fluid,
                aspectRatio: 21 / 10,
              }}
            />
            <b>
              <h3
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {secondBlog.frontmatter.title}
              </h3>
            </b>
          </div>
          <div>
            <Img
              sx={{ m: 3 }}
              fluid={{
                ...thridBlog.frontmatter.img.childImageSharp.fluid,
                aspectRatio: 21 / 10,
              }}
            />
            <b>
              <h3
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {thridBlog.frontmatter.title}
              </h3>
            </b>
          </div>
          <div>
            <Img
              sx={{ m: 3 }}
              fluid={{
                ...firstBlog.frontmatter.img.childImageSharp.fluid,
                aspectRatio: 21 / 10,
              }}
            />
            <b>
              <h3
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {firstBlog.frontmatter.title}
              </h3>
            </b>
          </div>
        </Grid>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    blogPosts: allMarkdownRemark(
      limit: 4
      filter: { fileAbsolutePath: { regex: "//markdown-pages/blog-posts/" } }
    ) {
      nodes {
        id
        html
        frontmatter {
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 210, height: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          path
          title
        }
      }
    }
  }
`
