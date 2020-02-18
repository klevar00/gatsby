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
  const { img, title, recipe, path } = frontmatter

  return (
    <Card sx={{ mb: 3 }}>
      <Grid gap={[1]} columns={[1, 1, 2, 2]}>
        <a href={path}>
          <Img
            sx={{ m: 3 }}
            fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
          />
        </a>
        <div sx={{ mx: "1em", width: "80%", my: ["10px", "auto"] }}>
          <h3>
            <b>{title}</b>
          </h3>
          <p className={style.blockWithText} sx={{ my: "7%" }}>
            {recipe}
          </p>
          <a href={path}>
            <RecipeButton sx={{ float: "right" }}>See more</RecipeButton>
          </a>
        </div>
      </Grid>
    </Card>
  )
}

export const BlogCard = ({ data }) => {
  const { html, frontmatter } = data
  const { img, title, path } = frontmatter

  console.log({ img })
  return (
    <Card sx={{ mb: 3 }}>
      <Grid gap={[1]} columns={[1, 1, 2, 2]}>
        <a href={path}>
          <Img
            sx={{ m: 3 }}
            fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
          />
        </a>
        <div sx={{ mx: "1em", width: "80%", my: ["10px", "auto"] }}>
          <h3>
            <b>{title}</b>
          </h3>
          <div
            className={style.blockWithText}
            sx={{
              my: "7%",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <a href={path}>
            <RecipeButton sx={{ float: "right" }}>See more</RecipeButton>
          </a>
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
      <Card key={id} sx={{ width: ["95%", "90%"], mx: "auto" }}>
        <Img
          sx={{ m: [2, 0] }}
          key={id}
          fluid={{
            ...frontmatter.img.childImageSharp.fluid,
            aspectRatio: 21 / 15,
          }}
        />
        <div sx={{ mt: 1, mb: 0, height: [20, 60] }}>
          <h3
            sx={{
              textAlign: "center",
              mt: 4,
              fontSize: "18px",
              color: "black",
            }}
          >
            <b>{frontmatter.title}</b>
          </h3>
        </div>
      </Card>
    </a>
  )
}

export const ThreeRecipeCardsTabs = ({ data }) => {
  const { id, frontmatter } = data

  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Daily recipes">
        <RecipeCards recipes={data.nodes} />
      </Tab>
      <Tab eventKey="profile" title="Five-min recipes">
        <RecipeCards recipes={data.nodes} />
      </Tab>
      <Tab eventKey="contact" title="Veggie recipes">
        <RecipeCards recipes={data.nodes} />
      </Tab>
    </Tabs>
  )
}
