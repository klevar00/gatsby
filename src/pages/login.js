/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex } from "theme-ui"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <div
        sx={{
          width: "70%",
          maxWidth: "container",
          margin: "0 auto",
          paddingBottom: "30px",
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
            margin: "0 auto",
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
            }}
          >
            Register
          </h3>
        </div>

        <Form sx={{ width: "50%", my: "4", mx: "auto" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Text className="text-muted" sx={{ my: "2" }}>
            Forgot your password?
          </Form.Text>
          <Button variant="primary" type="submit" sx={{ alignItems: "center" }}>
            Submit
          </Button>
        </Form>
      </div>
    </Layout>
  )
}

export default LoginPage
