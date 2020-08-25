import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import './style.scss'
import RecipeInfo from '../../components/RecipeInfo'
import RecipeHeader from '../RecipeHeader'
import RecipeIntro from '../../components/RecipeIntro'

function Post(props) {
  const { user, recipe } = props

  return (
    <div className="post-wrap">
      <div className="image-wrap">
        <div className="image">
          <img alt={recipe.title} src="https://baconmockup.com/320/320" />
        </div>
      </div>
      <div className="recipe-wrap">
        <RecipeHeader
          user={user}
          recipeId={recipe.id}
          portions={recipe.portions}
          time={recipe.time}
          title={recipe.title}
        />
        <Row className="recipe-body">
          <RecipeIntro intro={recipe.intro} />
          <RecipeInfo recipe={recipe} isLiked={true} />
        </Row>
      </div>
    </div>
  )
}

Post.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  recipe: PropTypes.instanceOf(Object).isRequired
}

export default Post
