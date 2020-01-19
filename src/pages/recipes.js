/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import {ThreeRecipeCardsTabs} from "../components/themeUIComponents"
import {RecipeCard} from "../components/themeUIComponents"
import {DropdownButton as DropdownButtonBS ,Dropdown as DropdownBS} from 'react-bootstrap'

const RecipesPage = ({data}) => {

  const {sliderImages, popularRecipes, blogPosts} = data

return <Layout>
  <SEO title="Recipes"/>
  <div
    sx={{maxWidth: "container", margin: "0 auto",}}>
            
          <h3 sx={{textAlign: "center", my: 5}}> WELCOME </h3>
          <div  sx={{
                  borderBottom: "1px solid orange",
                  paddingBottom: "30px",
                }}>
          <ThreeRecipeCardsTabs data={popularRecipes}></ThreeRecipeCardsTabs> </div>

          <div
            sx={{
              borderBottom: "1px solid orange",
              paddingBottom: "30px",
            }}
          >

            <h3>All recipes</h3>
            <div 
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"

              }}
            >
              <Dropdown></Dropdown>
              <h3>search</h3>
            </div>

          </div>

          <div 
          // sx={{borderStyle: "solid", width: "80%", margin: "0 auto", height: "100vh", borderColor: "blue",borderWidth: "4"}}
            sx={{border: "1px solid orange", width: "95%", margin: "0 auto"}}
          > 
            <BlogPosts posts={popularRecipes.nodes} ></BlogPosts>

          </div>
  </div>

</Layout>

}

export default RecipesPage

const BlogPosts = ({posts}) => {
  console.log(posts)
  return <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        py: "30px"
      }}>
        <div 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          {posts.map( post => (
              <RecipeCard key={post.id} data={post}></RecipeCard>
          ))}
        </div>
    </div>
}


const Dropdown = () => {

  return <DropdownButtonBS id="dropdown-item-button" title="Categories">
  <DropdownBS.Item as="button">Veggies</DropdownBS.Item>
  <DropdownBS.Item as="button">Meat</DropdownBS.Item>
  <DropdownBS.Item as="button">Something else</DropdownBS.Item>
  </DropdownButtonBS>

}


export const query = graphql`
  {
    sliderImages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}}) {
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
    

    popularRecipes: allMarkdownRemark(limit: 4, filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}}) {
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


    blogPosts: allMarkdownRemark(limit: 4, filter: {fileAbsolutePath: {regex: "//markdown-pages/blog-posts/"}}) {
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