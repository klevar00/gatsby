/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { graphql, Link } from "gatsby"
import Carousel from "../components/carousel"
import {ImageTitleText} from "../components/themeUIComponents"
import Img from "gatsby-image"
import { Grid, Card } from "@theme-ui/components"

const IndexPage = ({data}) => {

  const {sliderImages, popularRecipes, blogPosts} = data

return <Layout>
    <SEO title="Home"/>
    <h1 sx={{textAlign: "center"}}>Welcome</h1>
    <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        paddingBottom: "30px"
      }}>
      <Carousel images = {sliderImages.nodes}/>
    </div>
    <PopularRecipes recipesData = {popularRecipes.nodes}/>
    <BlogPosts posts={blogPosts.nodes}/>
    </Layout>
}

const PopularRecipes = ({recipesData}) => {

  return <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        py: "30px",
      }}>
        <h3 sx={{textAlign: "left"}}>Most popular recipes</h3>
        <Grid gap={[4]} columns={[1, 2 , 4 ,4]}>
        {recipesData.map( recipe => {
        return (
          <Link to={recipe.frontmatter.path} key={recipe.id}>
          <Img
            key={recipe.id}
            fluid={{ ...recipe.frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 15 }}
          ></Img>
          </Link>
        )
        })}
        </Grid>
    </div>
}

const BlogPosts = ({posts}) => {
  console.log(posts)
  return <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
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
              <ImageTitleText key={post.id} data={post}></ImageTitleText>
          ))}
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
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