/** @jsx jsx */
import { jsx, Footer as ThemeFooter } from "theme-ui"

import Container from "./container"

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
              textAlign: "center",
              fontWeight: "normal",
              color: "black",
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
