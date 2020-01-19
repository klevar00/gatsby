/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import {Container,Row,Col} from 'react-bootstrap'

export default function Template({ data,}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {img, title, recipe} = frontmatter

  console.log({html})
  console.log({markdownRemark})

  return <Layout>
          {/* <div className="blog-post-container">
            <div className="blog-post">
              <h1>{frontmatter.title}</h1>
            </div>
          </div> */}

      <Container fluid>
        <Row>
          <Col>
          
            <h3 sx={{textAlign: "center", mt: 3, mb: 5}}>{frontmatter.title}</h3>
          
          
          </Col>
        </Row>
        {/* <Row sx={{my: 5}}>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row> */}
          <Row>
    <Col xs={12} md={8}>
    <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }} />
    </Col>
    <Col xs={6} md={4} sx={{backgroundColor: "red"}}>
    <Img 
              sx={{ m: 0 }}
                // fixed={img.childImageSharp.fixed}
                // fluid={img.childImageSharp.fluid}

                fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
              
              />
    </Col>
  </Row>
      </Container>

      <p sx={{my: 10}}> {recipe} </p>

    </Layout>

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