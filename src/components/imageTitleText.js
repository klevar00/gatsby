/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"

const imageTitleText = ({data}) => {

    const {frontmatter, html} = data

    return <div>
        <Img 
                sx={{
                    display: "column",
                    width: "30%"
                }}
        fluid={{ ...frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 15 }}/>
        <div sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                }}>
            <h3>{frontmatter.title}</h3>
            <p>{html}</p>
            <button>See more</button>
        </div>
    </div>

}

export default imageTitleText