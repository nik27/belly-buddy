import React from 'react'
import PropTypes from 'prop-types'
import { Carousel, Image } from 'antd'
import './style.scss'

function ImageCarousel(props) {
  const { images, title } = props

  return (
    <Carousel className="carousel" dotPosition="top" autoplay>
      {images.map((element, index) => {
        return (
          <div key={`carousel-image${index}`}>
            <Image
              className="carousel-image"
              src={element}
              alt={`${title} ${index}`}
            />
          </div>
        )
      })}
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string
}

ImageCarousel.defaultProps = {
  title: 'Recipe'
}

export default ImageCarousel
