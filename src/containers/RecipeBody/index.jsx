import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Typography } from 'antd'
import RecipeInfo from '../../components/RecipeInfo'
import RecipeHeader from '../RecipeHeader'
import RecipeDetails from '../../components/RecipeDetails'
import IngredientsList from '../../components/RecipeIngredientsList'
import RecipeIntro from '../../components/RecipeIntro'
import './style.scss'

function RecipeBody(props) {
  const { recipe, likeCount, commentCount, bookmarkCount } = props

  return (
    <div className="recipe-body-wrap">
      <div className="recipe-info-wrap">
        <RecipeInfo
          recipe={{ id: recipe.id, ...recipe.body }}
          likeCount={likeCount}
          commentCount={commentCount}
          userHandle={recipe.userHandle}
          selectedRecipe
        />
      </div>
      <div className="recipe-header-wrap">
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
      </div>
      <div className="recipe-details-wrap">
        <div className="ingredients-list">
          <IngredientsList listItems={recipe.body.ingredients} />
        </div>
        <div className="recipe-details">
          <Divider orientation="center">
            <Typography.Title level={4}>Intro</Typography.Title>
          </Divider>
          <RecipeIntro intro={recipe.body.intro} />
          <Divider orientation="center">
            <Typography.Title level={4}>Method</Typography.Title>
          </Divider>
          <RecipeDetails details={recipe.body.steps} />
          {recipe.body.tips &&
            recipe.body.tips.length > 0 &&
            recipe.body.tips[0] !== '' && (
              <>
                <Divider orientation="center">
                  <Typography.Title level={4}>Tips</Typography.Title>
                </Divider>
                <RecipeDetails details={recipe.body.tips} />
              </>
            )}
        </div>
      </div>
    </div>
  )
}

RecipeBody.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  bookmarkCount: PropTypes.number.isRequired
}

export default RecipeBody
