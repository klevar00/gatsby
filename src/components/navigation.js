import React from "react"
import {Link} from "gatsby"

const Navigation = ({menuItems}) => {
    
    const nav =  menuItems.map(({link,text}) => (
          <li key={link}>
          <Link to={link}>{text}</Link>
          </li>
        ))

    return (<ul>
        {nav}
    </ul>)
}


export default Navigation