import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ImageCarousel from '../../components/Carousel'
import RecipeBody from '../RecipeBody'
import CommentsContainer from '../Comments'

function RecipeContainer(props) {
  const { recipe, user } = props
  const [show, setShow] = useState(false)

  const images = [
    'https://baconmockup.com/1136/500',
    'https://baconmockup.com/1136/500',
    'https://baconmockup.com/1136/500',
    'https://baconmockup.com/1136/500'
  ]
  return (
    <>
      <ImageCarousel title="test" images={images} />
      <RecipeBody recipe={recipe} user={user} />
      <CommentsContainer show={show} setShow={setShow} />
    </>
  )
}

RecipeContainer.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired
}

export default RecipeContainer
