/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "../components/carousel"
import Img from "gatsby-image"
import { Grid, Card } from "@theme-ui/components"

const IndexPage = () => {
  const data = useStaticQuery(graphql` {
  allMarkdownRemark {
    nodes {
      frontmatter {
        img {
          childImageSharp {
            resize(height: 400,width: 1000) {
              src
            }
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`)

const images = data.allMarkdownRemark.nodes

return <Layout>
    <SEO title="Home"/>
    <h1 sx={{textAlign: "center"}}>Welcome</h1>
    <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        paddingBottom: "30px"
      }}>
      <Carousel images = {images}/>
    </div>
    <PopularRecipes images = {images}/>
    <BlogPosts/>
    </Layout>
}

const PopularRecipes = ({images}) => {

  return <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        py: "30px",
      }}>
        <h3 sx={{textAlign: "left"}}>Most popular recipes</h3>
        <Grid gap={[4]} columns={[2, 2 , 3 ,6]}>
        {images.map( image => {

        return (
            <Img
              key={image.id}
              fluid={{ ...image.frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 15 }}
            />
        )
        })}
        </Grid>
    </div>
}

const BlogPosts = () => {
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
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
          <h3>test</h3>
        </div>
    </div>
}

export default IndexPage