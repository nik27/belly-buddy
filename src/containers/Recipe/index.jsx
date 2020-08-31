import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ImageCarousel from '../../components/Carousel'
import RecipeBody from '../RecipeBody'
import CommentsContainer from '../Comments'

function RecipeContainer(props) {
  const { recipe, showComments } = props
  const [show, setShow] = useState(showComments)
  const commentsRef = useRef(null)

  const scrollToComments = ref => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  useEffect(() => {
    if (showComments && commentsRef) {
      scrollToComments(commentsRef)
    }
  }, [showComments, commentsRef])

  return (
    <>
      <ImageCarousel title={recipe.title} images={recipe.pictures} />
      <RecipeBody
        recipe={recipe}
        likeCount={recipe.likeCount}
        commentCount={recipe.commentCount}
        bookmarkCount={recipe.bookmarkCount}
      />
      <CommentsContainer
        commentsRef={commentsRef}
        show={show}
        setShow={setShow}
        recipeId={recipe.id}
        comments={recipe.comments}
      />
    </>
  )
}

RecipeContainer.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  showComments: PropTypes.bool
}

RecipeContainer.defaultProps = {
  showComments: false
}

export default RecipeContainer
