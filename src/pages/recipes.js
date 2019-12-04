import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"


const RecipesPage = () => (
<Layout>
<SEO title="Recipes"/>
<Link to="/">Go back to the homepage</Link>
</Layout>
)

export default RecipesPage
