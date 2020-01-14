import { tailwind } from "@theme-ui/presets"

const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    container: "1024px",
    logo: "60px",
    navBar: "75px",
    navLinkBorder: "5px",
  },
  colors: {
    ...tailwind.colors,
    primary: "#000000",
    primaryHover: "#808080",
    accent: "#f50057",
  },
  fontWeights: {
    ...tailwind.fontWeights,
    heading: "500",
  },
  styles: {
    ...tailwind.styles,
    blockquote: {
      borderLeft: theme => `5px solid ${theme.colors.accent}`,
      paddingLeft: 2,
      marginLeft: 0,
      marginRight: 0,
      fontStyle: "italic",
    },
    h1: {
      ...tailwind.styles.h1,
      py: 4,
    },
    h2: {
      ...tailwind.styles.h2,
      py: 3,
    },
    h3: {
      ...tailwind.styles.h3,
      py: 1,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 2,
      boxShadow: theme => `0 0 8px ${theme.colors.orange[2]}`,
    },
  },
  shadows: {
    header: theme =>
      `0 4px 6px ${theme.colors.orange[1]}, 0 0 1px rgba(1,0,0,.1)`,
  },
  borders: {
    header: theme => `2px solid ${theme.colors.orange[1]}`,
  },
}

export default theme
