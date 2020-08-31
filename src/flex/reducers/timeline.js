import * as t from '../types/timeline'
import { PURGE } from 'redux-persist'

const initialState = {
  loading: false,
  error: null,
  loadingNext: false,
  errorNext: null,
  byId: {},
  allIds: []
}

export default function timeline(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case t.FETCH_RECIPE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case t.FETCH_RECIPE_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case t.FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        byId: payload.objectsArray,
        allIds: payload.idArray
      }
    case t.FETCH_RECIPE_NEXT_REQUEST:
      return {
        ...state,
        loadingNext: true
      }
    case t.FETCH_RECIPE_NEXT_FAILURE:
      return {
        ...state,
        errorNext: payload,
        loadingNext: false
      }
    case t.FETCH_RECIPE_NEXT_SUCCESS:
      return {
        ...state,
        loadingNext: false,
        byId: { ...state.byId, ...payload.objectsArray },
        allIds: [...state.allIds, ...payload.idArray]
      }
    case t.UPDATE_LIKE_COUNT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...state.byId[payload.id],
            likeCount: payload.count
          }
        }
      }
    case t.UPDATE_BOOKMARK_COUNT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...state.byId[payload.id],
            bookmarkCount: payload.count
          }
        }
      }
    case PURGE:
      return initialState
    default:
      return state
  }
}
