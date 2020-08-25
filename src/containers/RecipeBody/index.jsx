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
  const { recipe, user } = props

  return (
    <div className="recipe-body-wrap">
      <div className="recipe-info-wrap">
        <RecipeInfo isLiked={true} recipe={recipe} />
      </div>
      <div className="recipe-header-wrap">
        <RecipeHeader
          user={user}
          recipeId={recipe.id}
          title={recipe.title}
          time={recipe.time}
          portions={recipe.portions}
        />
      </div>
      <div className="recipe-details-wrap">
        <div className="ingredients-list">
          <IngredientsList />
        </div>
        <div className="recipe-details">
          <Divider orientation="center">
            <Typography.Title level={4}>Intro</Typography.Title>
          </Divider>
          <RecipeIntro user={user} intro={recipe.intro} />
          <Divider orientation="center">
            <Typography.Title level={4}>Method</Typography.Title>
          </Divider>
          <RecipeDetails details={recipe.steps} />
          {recipe.tips && recipe.tips.length > 0 && (
            <>
              <Divider orientation="center">
                <Typography.Title level={4}>Tips</Typography.Title>
              </Divider>
              <RecipeDetails details={recipe.tips} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

RecipeBody.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired
}

export default RecipeBody
