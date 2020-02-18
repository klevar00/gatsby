/** @jsx jsx */
import Navigation from "./navigation"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import { css, jsx, Main } from "theme-ui"

import style from "../components/global.module.css"

const SiteContainer = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width: ["90%", "70%"],
      pb: "2em",
      minHeight: "85vh",
    }}
  />
)

const Layout = props => {
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

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Navigation menuItems={data.site.siteMetadata.menuItems} />
      <SiteContainer>{props.children}</SiteContainer>
      <Footer />
    </div>
  )
}

export default Layout
