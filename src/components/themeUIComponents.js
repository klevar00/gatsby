/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import style from "./themeUIComponents.module.css"
import { Card, Grid } from '@theme-ui/components'

export const ImageTitleText = ({data}) => {

    const {html, frontmatter} = data
    const {img, title} = frontmatter

    console.log({img})
    return <Card>

      <Grid gap={[1]} columns={[1, 1, 2, 2]} >

      <Img 
              sx={{ m: 3 }}
                // fixed={img.childImageSharp.fixed}
                // fluid={img.childImageSharp.fluid}

                fluid={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 10 }}
              
              />


           <div sx={{ mx: "1em", width: "80%"}}>
               <h3>Title</h3>
               <p className={style.blockWithText} >Anyone with a sweet tooth and a tolerance for gluten loves a good cinnamon roll. Whether you’re trying to impress someone special or just stuff your face, there’s nothing better than baking them at home. The fact that Pillsbury packages them in a can makes them pretty much the best non-alcoholic, perishable item presented in that format.</p>
               <button sx={{height: 5, width: 20}}>See more</button>              
           </div>

      </Grid>


    </Card>
    

    // <Grid gap={[4]} columns={[1, 2 , 4 ,4]}>
    //     {recipesData.map( recipe => {
    //     return (
    //       <Link to={recipe.frontmatter.path} key={recipe.id}>
    //       <Img
    //         key={recipe.id}
    //         fluid={{ ...recipe.frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 15 }}
    //       ></Img>
    //       </Link>
    //     )
    //     })}
    //     </Grid>
    
    
//     <Card
//     sx={{
//         margin: "0 auto",
//         display: "flex",
// //        justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         maxHeight: "200px"
//     }}>

//           <div sx={{
//                     display: "grid",
//                     width: "30%"
//                     }}>
            
//             <Img sx={{ mx: 1, margin: "auto"}}
//                 fixed={img.childImageSharp.fixed}
//               />

          
//           </div>

//           <div sx={{ mx: "2em", width: "70%"}}>
//               <h3>Title</h3>
//               <p className={style.blockWithText} >Anyone with a sweet tooth and a tolerance for gluten loves a good cinnamon roll. Whether you’re trying to impress someone special or just stuff your face, there’s nothing better than baking them at home. The fact that Pillsbury packages them in a can makes them pretty much the best non-alcoholic, perishable item presented in that format.</p>
//               <button sx={{height: 5, width: 20}}>See more</button>              
//           </div>


//     </Card>
}


export const ImageTitle = ({data}) => {

  const {id, frontmatter} = data

  console.log(frontmatter)
  return <a href={frontmatter.path}>
      <Card key={id}>
      <Img
        key={id}
        fluid={{ ...frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 15 }}
      />
      <p sx={{ mt: 1, mb: 0, height: 75 }}>
        <h3>
          {frontmatter.title}
        </h3>
      </p>
                   
    </Card>
    </a>

}