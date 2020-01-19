/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid } from "@theme-ui/components"
import { ImageTitle } from "../components/themeUIComponents"

export const RecipeCards = ({recipes}) => {

    return <Grid gap={[2]} columns={[1, 2 , 4 ,4]}>
          {recipes.map( recipe => {
          return (
             <ImageTitle data={recipe}/>
          )
          })}
          </Grid>
  
  }