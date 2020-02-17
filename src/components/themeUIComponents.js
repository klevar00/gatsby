/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import style from "./themeUIComponents.module.css"
import { Card, Grid } from "@theme-ui/components"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import { RecipeCards } from "../components/recipeCards"
import { RecipeButton } from "../components/recipeButton"

export const RecipeCard = ({ data }) => {
  const { id, frontmatter } = data
  const { img, title, recipe } = frontmatter

  return (
    <Card sx={{ mb: 3 }}>
      <Grid gap={[1]} columns={[1, 1, 2, 2]}>
        <Img
          sx={{ m: 3 }}
          // fixed={img.childImageSharp.fixed}
          // fluid={img.childImageSharp.fluid}

          fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
        />
        <div sx={{ mx: "1em", width: "80%", my: ["10px", "auto"] }}>
          <h3>{title}</h3>
          <p className={style.blockWithText} sx={{ my: "7%" }}>
            {recipe}
          </p>
          <RecipeButton sx={{ float: "right" }}>See more</RecipeButton>
        </div>
      </Grid>
    </Card>
  )
}

export const BlogCard = ({ data }) => {
  const { html, frontmatter } = data
  const { img, title } = frontmatter

  console.log({ img })
  return (
    <Card sx={{ mb: 3 }}>
      <Grid gap={[1]} columns={[1, 1, 2, 2]}>
        <Img
          sx={{ m: 3 }}
          fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
        />
        <div sx={{ mx: "1em", width: "80%", my: ["10px", "auto"] }}>
          <h3>Title</h3>
          <p className={style.blockWithText} sx={{ my: "7%" }}>
            Anyone with a sweet tooth and a tolerance for gluten loves a good
            cinnamon roll. Whether you’re trying to impress someone special or
            just stuff your face, there’s nothing better than baking them at
            home. The fact that Pillsbury packages them in a can makes them
            pretty much the best non-alcoholic, perishable item presented in
            that format.
          </p>
          <RecipeButton sx={{ float: "right" }}>See more</RecipeButton>
        </div>
      </Grid>
    </Card>
  )
}

export const ImageTitle = ({ data }) => {
  const { id, frontmatter } = data

  console.log(frontmatter)
  return (
    <a href={frontmatter.path}>
      <Card key={id} sx={{ width: ["80%", "90%"], mx: "auto" }}>
        <Img
          sx={{ m: [2, 0] }}
          key={id}
          fluid={{
            ...frontmatter.img.childImageSharp.fluid,
            aspectRatio: 21 / 15,
          }}
        />
        <div sx={{ mt: 1, mb: 0, height: [60, 80] }}>
          <h3
            sx={{
              textAlign: "center",
              mt: 4,
              fontSize: "20px",
              color: "black",
            }}
          >
            {frontmatter.title}
          </h3>
        </div>
      </Card>
    </a>
  )
}

export const ThreeRecipeCardsTabs = ({ data }) => {
  const { id, frontmatter } = data

  console.log(frontmatter)
  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Daily recipes">
        <RecipeCards recipes={data.nodes} />
      </Tab>
      <Tab eventKey="profile" title="Five-min recipes">
        <RecipeCards recipes={data.nodes} />
      </Tab>
      <Tab
        eventKey="contact"
        title="Veggie recipes"
        sx={{ height: "300px", bg: "red" }}
      >
        Cevap
      </Tab>
    </Tabs>
  )
}
