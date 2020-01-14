/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Card, Text, Grid } from '@theme-ui/components'

export const ImageTitleText = ({data}) => {

    const {html, frontmatter} = data
    const {img, title} = frontmatter

    return <div>
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
                sx={{ mx: 1, textAlign: "center" }}
                fixed={img.childImageSharp.fixed}
              />
          <div sx={{m: 1, backgroundColor: "white"}}>
            <h3>Title</h3>
            <p>Text</p>
            <button sx={{height: 5, width: 20}}>See more</button>
          </div>

        </div>
        </Card>
    </div>

}