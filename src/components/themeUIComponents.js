/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import style from "./themeUIComponents.module.css"
import { Card, Text, Grid } from '@theme-ui/components'

export const ImageTitleText = ({data}) => {

    const {html, frontmatter} = data
    const {img, title} = frontmatter

    return <Card
    sx={{
        margin: "0 auto",
        display: "flex",
//        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxHeight: "200px"
    }}>

          <div sx={{
                    display: "grid",
                    width: "30%"
                    }}>
            
            <Img sx={{ mx: 1, margin: "auto"}}
                fixed={img.childImageSharp.fixed}
              />

          
          </div>

          <div sx={{ mx: "2em", width: "70%"}}>
              <h3>Title</h3>
              <p className={style.blockWithText} >Anyone with a sweet tooth and a tolerance for gluten loves a good cinnamon roll. Whether you’re trying to impress someone special or just stuff your face, there’s nothing better than baking them at home. The fact that Pillsbury packages them in a can makes them pretty much the best non-alcoholic, perishable item presented in that format.</p>
              <button sx={{height: 5, width: 20}}>See more</button>              
          </div>


    </Card>
/*      <div>
        <Card
        sx={{
            margin: "0 auto",
            maxHeight: "210px"
        }}>
        <div
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: [
              '210px 1fr'
            ],
            verticalAlign: "middle"
          }}>
        <Img
                sx={{ mx: 1}}
                fixed={img.childImageSharp.fixed}
              />
          <div sx={{m: 1, backgroundColor: "white"}}>
            <h3>Title</h3>
            <p>Text</p>
            <button sx={{height: 5, width: 20}}>See more</button>
          </div>

        </div>
        </Card>
    </div> */

}