import { createSelector } from 'reselect'

export const getBookmarkRecipe = state => {
  return state.bookmark
}

export const getBookmarkRecipeSuper = createSelector(
  [getBookmarkRecipe],
  recipe => {
    return recipe.allIds.map(id => recipe.byId[id])
  }
)

export const getBookmarkLoading = state => state.bookmark.loading

export const getBookmarkNextLoading = state => state.bookmark.loadingNext
