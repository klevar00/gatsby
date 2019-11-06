import React from "react"
import Navigation from "./navigation"

const menuItems = [
  {
    text: "Predavanja",
    link: "/predavanja"
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

const Layout = ({props}) => {
  
  console.log(props)
  
  return <div style={{ backgroundColor: "orange"}}>
    <Navigation menuItems={menuItems}/>
    {props.children}
  </div>}


export default Layout