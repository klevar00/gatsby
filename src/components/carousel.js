import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"
import CarouselBS from "react-bootstrap/Carousel"

// const Carousel = ({images}) => {

//    const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 3000,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }

//     return <Slider {...settings}>
//         {images.map(image => (
//             // <img src={image.frontmatter.img.childImageSharp.resize.src}/>
//             <Img
//                 key={image.id}
//                 fluid={{ ...image.frontmatter.img.childImageSharp.fluid, aspectRatio: 21 / 7 }}/>
//         ))}
//     </Slider>

// }

const Carousel = ({ images }) => {
  return (
    <CarouselBS
      sx={{
        boxShadow: "0 0 8px red",
      }}
    >
      {images.map(image => (
        <CarouselBS.Item>
          <a href={image.path}>
            <Img
              key={image.id}
              fluid={{
                ...image.frontmatter.img.childImageSharp.fluid,
                aspectRatio: 21 / 7,
              }}
            />

            <CarouselBS.Caption>
              <h3>{image.frontmatter.title}</h3>
            </CarouselBS.Caption>
          </a>
        </CarouselBS.Item>
      ))}
    </CarouselBS>
  )
}

export default Carousel
