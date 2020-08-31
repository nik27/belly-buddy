import * as t from '../types/bookmark'
import {
  fetchRecipeBookmarkInitial,
  fetchRecipeBookmarkNext
} from '../../api/recipe'

export const getRecipeBookmark = () => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_REQUEST
  })

  return fetchRecipeBookmarkInitial()
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

export const getRecipeBookmarkNext = lastTimestamp => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_NEXT_REQUEST
  })

  return fetchRecipeBookmarkNext(lastTimestamp)
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
