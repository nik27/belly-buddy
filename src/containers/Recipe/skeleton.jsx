import React from 'react'
import PropTypes from 'prop-types'
import ImageCarouselSkeleton from '../../components/Carousel/skeleton'
import RecipeBodySkeleton from '../RecipeBody/skeleton'
import CommentsContainerSkeleton from '../Comments/skeleton'

function RecipeContainerSkeleton(props) {
  const { show } = props
  return (
    <>
      <ImageCarouselSkeleton />
      <RecipeBodySkeleton />
      <CommentsContainerSkeleton show={show} />
    </>
  )
}

RecipeContainerSkeleton.propTypes = {
  show: PropTypes.bool
}

RecipeContainerSkeleton.defaultProps = {
  showComments: false
}

export default RecipeContainerSkeleton
