import React from "react"
import Navigation from "./navigation"
import { useStaticQuery, graphql } from "gatsby"

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
  
  return <div>
    <Navigation menuItems={data.site.siteMetadata.menuItems}/>
    {props.children}
  </div>}


export default Layout