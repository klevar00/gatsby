import React from "react"
import Img from "gatsby-image"

const imageTitleText = ({data}) => {

    const {img, title, text} = data

    return <div>
        <Img/>
        <div>
            <h3></h3>
            <p></p>
            <button></button>
        </div>
    </div>

}

export default imageTitleText