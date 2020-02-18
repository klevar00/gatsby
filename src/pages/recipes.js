/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { ThreeRecipeCardsTabs } from "../components/themeUIComponents"
import { RecipeCard } from "../components/themeUIComponents"
import {
  DropdownButton as DropdownButtonBS,
  Dropdown as DropdownBS,
} from "react-bootstrap"
import "font-awesome/css/font-awesome.min.css"
import { Form, Col, InputGroup } from "react-bootstrap"

const RecipesPage = ({ data }) => {
  const { sliderImages, popularRecipes, blogPosts } = data

  return (
    <Layout>
      <SEO title="Recipes" />
      <div sx={{ maxWidth: "container", margin: "0 auto" }}>
        <h2 sx={{ textAlign: "center", my: 4 }}> Eat good - Feel good </h2>
        <div
          sx={{
            paddingBottom: "30px",
          }}
        >
          <ThreeRecipeCardsTabs data={popularRecipes}></ThreeRecipeCardsTabs>{" "}
        </div>

        <div>
          <h2>All recipes</h2>
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              mt: 4,
              mx: "auto",
            }}
          >
            <Dropdown sx={{ backgroundColor: "white" }}></Dropdown>
            <Form.Row>
              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Search here.." />
                </InputGroup>
              </Form.Group>
            </Form.Row>
          </div>
        </div>

        <div>
          <BlogPosts posts={popularRecipes.nodes}></BlogPosts>
        </div>
      </div>
    </Layout>
  )
}

export default RecipesPage

const BlogPosts = ({ posts }) => {
  console.log(posts)
  return (
    <div
      sx={{
        width: "80%",
        maxWidth: "container",
        margin: "0 auto",
        py: "30px",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {posts.map(post => (
          <RecipeCard key={post.id} data={post}></RecipeCard>
        ))}
      </div>
    </div>
  )
}

const Dropdown = () => {
  return (
    <DropdownButtonBS
      variant="outline-warning"
      id="dropdown-item-button"
      title="Categories"
    >
      <DropdownBS.Item as="button">Veggies</DropdownBS.Item>
      <DropdownBS.Item as="button">Meat</DropdownBS.Item>
      <DropdownBS.Item as="button">Healthy</DropdownBS.Item>
    </DropdownButtonBS>
  )
}

export const query = graphql`
  {
    sliderImages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//markdown-pages/recipes/" } }
    ) {
      nodes {
        id
        frontmatter {
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
          recipe
        }
      }
    }

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
          title
        }
      }
    }
  }
`
