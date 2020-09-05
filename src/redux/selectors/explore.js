import { createSelector } from 'reselect'

export const getExploreRecipe = state => {
  return state.explore
}

export const getExploreRecipeSuper = createSelector(
  [getExploreRecipe],
  recipe => {
    return recipe.allIds.map(id => recipe.byId[id])
  }
)

export const getExploreLoading = state => state.explore.loading

export const getExploreNextLoading = state => state.explore.loadingNext
