import { createSelector } from 'reselect'

export const getTimelineRecipe = state => {
  return state.timeline
}

export const getTimelineRecipeSuper = createSelector(
  [getTimelineRecipe],
  recipe => {
    return recipe.allIds.map(id => recipe.byId[id])
  }
)

export const getTimelineLoading = state => state.timeline.loading

export const getTimelineNextLoading = state => state.timeline.loadingNext
