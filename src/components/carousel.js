import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({images}) => {

   const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return <Slider {...settings}>
        {images.map(image => (
            <img src={image.frontmatter.img.childImageSharp.resize.src}/>
        ))}
    </Slider>

}

export default Carousel