import React from "react"
import {Link} from "gatsby"
import { jsx } from "theme-ui"

import Container from "./container"

import logo from "../assets/logo.svg"


const LogoLink = () => (
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        sx={{
          height: "logo",
          width: "auto",
        }}
      />
    </Link>
  )

  const NavLink = ({ ...prop }) => (
    <Link
      {...prop}
      sx={{
        display: "inline-block",
        color: "primary",
        textDecoration: "none",
        textTransform: "uppercase",
        fontWeight: "light",
        whiteSpace: "nowrap",
        letterSpacing: "tight",
        transition: "all 0.25s linear",
      }}
    />
  )



const Navigation = ({menuItems}) => {

    const nav =  menuItems.map(({path,text}) => (
          <Link to={path}>{text}</Link>
        ))

    return(  
    <Container
            sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            }}>
    <LogoLink />
    {nav}
    </Container> )
}


export default Navigation