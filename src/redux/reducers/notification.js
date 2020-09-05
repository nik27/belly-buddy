import * as t from '../types/notifications'
import { PURGE } from 'redux-persist'

const initialState = { loading: false, error: null, byId: {}, allIds: [] }

export default function notification(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case t.FETCH_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true
      }
    case t.FETCH_NOTIFICATION_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case t.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        byId: payload.objectsArray,
        allIds: payload.idArray
      }
    case t.FETCH_NOTIFICATION_NEXT_REQUEST:
      return {
        ...state,
        loadingNext: true
      }
    case t.FETCH_NOTIFICATION_NEXT_FAILURE:
      return {
        ...state,
        errorNext: payload,
        loadingNext: false
      }
    case t.FETCH_NOTIFICATION_NEXT_SUCCESS:
      return {
        ...state,
        loadingNext: false,
        byId: { ...state.byId, ...payload.objectsArray },
        allIds: [...state.allIds, ...payload.idArray]
      }
    case t.MARK_AS_READ:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...payload
        }
      }
    case PURGE:
      return initialState
    default:
      return state
  }
}
