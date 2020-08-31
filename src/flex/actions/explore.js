import * as t from '../types/explore'
import {
  fetchRecipeExploreInitial,
  fetchRecipeExploreNext
} from '../../api/recipe'

export const getRecipeExplore = () => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_REQUEST
  })

  return fetchRecipeExploreInitial()
    .then(({ data }) => {
      dispatch({
        type: t.FETCH_RECIPE_SUCCESS,
        payload: {
          objectsArray: data.reduce((dataObject, item) => {
            dataObject[item.id] = item
            return dataObject
          }, {}),
          idArray: data.map(item => item.id.toString())
        }
      })
    })
    .catch(res => {
      dispatch({
        type: t.FETCH_RECIPE_FAILURE,
        payload: res.message
      })
    })
}

export const getRecipeExploreNext = lastTimestamp => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_NEXT_REQUEST
  })

  return fetchRecipeExploreNext(lastTimestamp)
    .then(({ data }) => {
      dispatch({
        type: t.FETCH_RECIPE_NEXT_SUCCESS,
        payload: {
          objectsArray: data.reduce((dataObject, item) => {
            dataObject[item.id] = item
            return dataObject
          }, {}),
          idArray: data.map(item => item.id.toString())
        }
      })
    })
    .catch(res => {
      dispatch({
        type: t.FETCH_RECIPE_NEXT_FAILURE,
        payload: res.message
      })
    })
}
