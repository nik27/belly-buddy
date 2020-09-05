import * as t from '../types/timeline'
import {
  fetchRecipeTimelineInitial,
  fetchRecipeTimelineNext
} from '../../api/recipe'

export const getRecipeTimeline = () => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_REQUEST
  })

  return fetchRecipeTimelineInitial()
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

export const getRecipeTimelineNext = lastTimestamp => dispatch => {
  dispatch({
    type: t.FETCH_RECIPE_NEXT_REQUEST
  })

  return fetchRecipeTimelineNext(lastTimestamp)
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
