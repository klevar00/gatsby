import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

const menuItems = [
  {
    text: "Index",
    link: "/"
  },{
    text: "Ocjenjivanje",
    link: "/ocjenjivanje"
  },
  {
    text: "Projekti",
    link: "/projekti"
  },
  {
    text: "Rezultati",
    link: "/rezultati"
  },
  {
    text: "Blog",
    link: "/blog"
  }
]

const Predavanja = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <Link></Link>
  </Layout>
)

export default Predavanja
