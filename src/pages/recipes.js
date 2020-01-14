import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Grid, Card , Box} from "@theme-ui/components"


const RecipesPage = () => (
<Layout>
<SEO title="Recipes"/>
<Link to="/">Go back to the homepage</Link>
<Grid width={[ 128, null, 192 ]}>
<Box
  p={4}
  color='red'
  bg='primary'>
  Beep
</Box>
  <Card
  sx={{
    maxWidth: 256,
  }}>
  <img sx={{ width: "256", }} src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
  <p>ddd
    
  </p>
</Card>
</Grid>


</Layout>
)

export default RecipesPage
