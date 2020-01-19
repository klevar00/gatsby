/** @jsx jsx */
import React from "react"
import Navigation from "./navigation"
import { useStaticQuery, graphql } from "gatsby"
import { css, jsx, Main } from "theme-ui"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const SiteContainer = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto", 
      width: "85%",
      pb: "2em"
    }}
  />
)

const Layout = (props) => {
  
  console.log(props)
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        menuItems {
          text
          path
        }
      }
    }
  }
`)
  
  return <div
    sx={{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto", 
      minHeight: "100vh"
    }}>
    <Navigation 
    
    menuItems={data.site.siteMetadata.menuItems}/>
    <SiteContainer>
    {props.children}
    </SiteContainer>
    <Footer/>
  </div>}


export default Layout