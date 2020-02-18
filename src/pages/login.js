/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex } from "theme-ui"
import Form from "react-bootstrap/Form"
import { RecipeButton } from "../components/recipeButton"

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <div
        sx={{
          width: ["90%", "70%"],
          maxWidth: "container",
          margin: "0 auto",
          mt: "4",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "baseline",
            width: "80%",
            mt: 5,
            mx: "auto",
          }}
        >
          <h3
            sx={{
              width: "50%",
              textAlign: "center",
              borderRight: "1px solid orange",
            }}
          >
            Login
          </h3>
          <h3
            sx={{
              width: "50%",
              textAlign: "center",
              borderLeft: "1px solid orange",
              "&:hover": {
                color: "#FFC551",
                cursor: "pointer",
              },
            }}
          >
            Register
          </h3>
        </div>

        <Form sx={{ width: ["90%", "90%", "90%", "60%"], mt: "4", mx: "auto" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>
          <Form.Text className="text-muted" sx={{ my: "2" }}>
            <span
              sx={{
                my: "2",
                "&:hover": {
                  color: "#FFC551",
                  cursor: "pointer",
                },
              }}
            >
              Forgot your password?
            </span>
          </Form.Text>
          <RecipeButton sx={{ mx: "40%" }}>Submit</RecipeButton>
        </Form>
      </div>
    </Layout>
  )
}

export default LoginPage
