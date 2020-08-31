import React from 'react'
import { Skeleton } from 'antd'
import './style.scss'

function ImageCarouselSkeleton(props) {
  return (
    <div className="carousel">
      <Skeleton.Button active />
    </div>
  )
}

export default ImageCarouselSkeleton
