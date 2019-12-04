/** @jsx jsx */
import { jsx, Styled, Footer as ThemeFooter } from "theme-ui"

import Container from "./container"
import { GitHub, Gatsby } from "./icons"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <ThemeFooter
      sx={{
        bg: "orange.2",
        mt: 4,
        pt: [2, 2, 3],
        pb: 2,
        color: "white",
      }}
    >
      <Container>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            sx={{
              fontWeight: "normal",
              color: "black"
            }}
          >
           {currentYear}
          </h2>
        </div>
      </Container>
    </ThemeFooter>
  )
}

export default Footer
