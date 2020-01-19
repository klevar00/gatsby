/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { graphql} from "gatsby"
import Carousel from "../components/carousel"
import {BlogCard} from "../components/themeUIComponents"
import {RecipeCards} from "../components/recipeCards"

const IndexPage = ({data}) => {

  const {sliderImages, popularRecipes, blogPosts} = data

return <Layout>
    <SEO title="Home"/>
    {/* <h3 sx={{textAlign: "center", my: 5}}> WELCOME </h3> */}
    <div  sx={{width: "100%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        paddingBottom: "30px",
        mt: "3"
      }}>
      <Carousel images = {sliderImages.nodes}/>
    </div>
    <div  sx={{maxWidth: "container", margin: "0 auto",
          borderBottom: "1px solid orange",
          py: "30px",
        }}>
          <h3 sx={{textAlign: "left"}}>Most popular recipes</h3>
    <RecipeCards recipes = {popularRecipes.nodes}/> </div>
    <BlogPosts posts={blogPosts.nodes}/>
    </Layout>
}


const BlogPosts = ({posts}) => {
  console.log(posts)
  return <div  sx={{maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        py: "30px"
      }}>
        <h3 sx={{textAlign: "left"}}>New blog posts</h3>
        <div 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          {posts.map( post => (
              <BlogCard key={post.id} data={post}></BlogCard>
          ))}
                   {posts.map( post => (
              <BlogCard key={post.id} data={post}></BlogCard>
          ))}
                   {posts.map( post => (
              <BlogCard key={post.id} data={post}></BlogCard>
          ))}
        </div>
    </div>
}

export default IndexPage

export const query = graphql`
  {
    sliderImages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}}) {
      nodes {
        id
        frontmatter {
          img {
            childImageSharp {
              fluid {
                src
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