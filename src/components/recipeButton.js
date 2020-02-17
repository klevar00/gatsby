/** @jsx jsx */
import { jsx } from "theme-ui"

export const RecipeButton = props => {
  console.log("cevap", props.styles)
  return (
    <button
      {...props}
      sx={{
        backgroundColor: "white",
        color: "black",
        border: "2px solid #FFC551",
        width: 100,
        height: 30,

        "&:hover": {
          backgroundColor: "#FFC551",
          color: "white",
        },
      }}
    >
      {props.children}
    </button>
  )
}
