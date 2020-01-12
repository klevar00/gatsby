/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo" 
import { graphql } from "gatsby"
import Carousel from "../components/carousel"
import Img from "gatsby-image"
import { Grid } from "@theme-ui/components"

const IndexPage = ({data}) => {

  const {sliderImages, popularRecipes} = data

return <Layout>
    <SEO title="Home"/>
    <h1 sx={{textAlign: "center"}}>Welcome</h1>
    <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        paddingBottom: "30px"
      }}>
      <Carousel images = {sliderImages.nodes}/>
    </div>
    <PopularRecipes images = {popularRecipes.nodes}/>
    <BlogPosts/>
    </Layout>
}

const PopularRecipes = ({images}) => {

  return <div  sx={{width: "80%",maxWidth: "container", margin: "0 auto",
        borderBottom: "1px solid orange",
        py: "30px",
      }}>
        <h3 sx={{textAlign: "left"}}>Most popular recipes</h3>
        <Grid gap={[4]} columns={[1, 2 , 4 ,4]}>
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



// popularRecipes: allMarkdownRemark(limit: 5) {
//   nodes {
//     frontmatter {
//       img {
//         childImageSharp {
//           fluid {
//             src
//           }
//         }
//       }
//     }
//   }
// }

export const query = graphql`
  {
    sliderImages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}}) {
      nodes {
        frontmatter {
          img {
            childImageSharp {
              resize(height: 400, width: 1000) {
                src
              }
            }
          }
        }
      }
    }
    

    popularRecipes: allMarkdownRemark(limit: 4, filter: {fileAbsolutePath: {regex: "//markdown-pages/recipes/"}}) {
      nodes {
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
  }
`