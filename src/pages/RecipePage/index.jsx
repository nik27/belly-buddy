import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipe, clearSelectedRecipe } from '../../redux/actions'
import {
  getSelectedRecipe,
  isSelectedRecipeLoading
} from '../../redux/selectors'
import RecipeContainer from '../../containers/Recipe'
import RecipeContainerSkeleton from '../../containers/Recipe/skeleton'
import './style.scss'

function Recipe() {
  const dispatch = useDispatch()
  const { recipeId, showComments } = useParams()
  const recipe = useSelector(state => getSelectedRecipe(state))
  const isLoading = useSelector(state => isSelectedRecipeLoading(state))

  useEffect(() => {
    if (recipeId) {
      dispatch(getRecipe(recipeId))
    }
    return () => {
      dispatch(clearSelectedRecipe())
    }
  }, [dispatch, recipeId])

  return (
    <div className="recipe-page">
      {isLoading ? (
        <RecipeContainerSkeleton show={showComments === 'true'} />
      ) : (
        recipe && (
          <RecipeContainer
            recipe={recipe}
            showComments={showComments === 'true'}
          />
        )
      )}
    </div>
  )
}

export default Recipe
