import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import './style.scss'
import RecipeInfo from '../../components/RecipeInfo'
import RecipeHeader from '../RecipeHeader'
import RecipeIntro from '../../components/RecipeIntro'

function Post(props) {
  const { recipe, likeCount, commentCount, bookmarkCount } = props

  return (
    <div className="post-wrap">
      <div className="image-wrap">
        <div className="image">
          <img alt={recipe.body.title} src={recipe.mainPicture} />
        </div>
      </div>
      <div className="recipe-wrap">
        <RecipeHeader
          user={{
            profilePicture: recipe.profilePicture,
            userName: recipe.userName,
            userHandle: recipe.userHandle
          }}
          recipeId={recipe.id}
          portions={recipe.body.portions}
          tags={recipe.tags}
          time={recipe.body.time}
          title={recipe.body.title}
          bookmarkCount={bookmarkCount}
        />
        <Row className="recipe-body">
          <RecipeIntro intro={recipe.body.intro} />
          <RecipeInfo
            recipe={{ id: recipe.id, ...recipe.body }}
            likeCount={likeCount}
            commentCount={commentCount}
            userHandle={recipe.userHandle}
          />
        </Row>
      </div>
    </div>
  )
}

Post.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  bookmarkCount: PropTypes.number.isRequired
}

export default Post
