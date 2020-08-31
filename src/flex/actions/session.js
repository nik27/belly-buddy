import axios from 'axios'
import * as t from '../types/session'
import * as bookmarkTypes from '../types/bookmark'
import * as exploreTypes from '../types/explore'
import * as timelineTypes from '../types/timeline'
import {
  signUp,
  apiTokenAuth,
  getCurrentUser,
  getSelectedProfile,
  getLikeRecipe,
  getUnlikeRecipe,
  getBookmarkRecipe,
  getUnbookmarkRecipe,
  getFollow,
  getUnfollow,
  fetchTags,
  getSelectedRecipe
} from '../../api/session'
import { createComment, createRecipe, deleteRecipe } from '../../api/recipe'
import history from '../../utils/history'
import { get, set } from '../../utils/storage'

export const getToken = authData => dispatch => {
  const body = authData

  return apiTokenAuth(body)
    .then(res => {
      axios.defaults.headers.Authorization = `Bearer ${res.data.token}`
      document.cookie = `Token=Bearer ${res.data.token}; path=/; sameSite=lax;`
      set('localStorage', 'token', `Bearer ${res.data.token}`)

      return getCurrentUser()
    })
    .then(res => {
      set('localStorage', 'user', JSON.stringify(res.data))

      dispatch({
        type: t.SET_SESSION_USER,
        payload: res.data
      })
    })
    .then(() => history.push('/'))
}

export const handleSignUp = body => dispatch => {
  dispatch({ type: t.SIGN_UP_REQUEST })

  return signUp(body)
    .then(res => {
      dispatch({ type: t.SIGN_UP_SUCCESS })
    })
    .then(() => history.push('/login'))
    .catch(err => {
      if (
        err.response.data?.error?.code === 'auth/weak-password' ||
        err.response.data?.error?.code === 'auth/email-already-in-use'
      ) {
        dispatch({
          type: t.SIGN_UP_FAIL,
          payload: err.response.data.error.message
        })
      } else {
        dispatch({ type: t.SIGN_UP_FAIL, payload: err.response.data.message })
      }
    })
}

export const resetSignUpForm = () => dispatch => {
  dispatch({ type: t.SIGN_UP_FAIL, payload: null })
}

export const getCurrentSessionUser = () => dispatch => {
  return getCurrentUser().then(res => {
    dispatch({
      type: t.SET_SESSION_USER,
      payload: res.data
    })
  })
}

export const getUserInLocalStorage = () => (dispatch, getState) => {
  const { user } = getState().session

  if (!user) {
    dispatch({
      type: t.SET_SESSION_USER,
      payload: JSON.parse(get('localStorage', 'user'))
    })
  }
  axios.defaults.headers.Authorization = get('localStorage', 'token')
}

export const getProfile = userHandle => dispatch => {
  dispatch({ type: t.PROFILE_REQUEST })
  return getSelectedProfile(userHandle)
    .then(res => dispatch({ type: t.SET_SELECTED_PROFILE, payload: res.data }))
    .catch(() => {
      dispatch({ type: t.PROFILE_REQUEST, payload: false })
    })
}

export const updateProfilePicture = pictureUrl => dispatch => {
  dispatch({ type: t.UPDATE_PROFILE_PICTURE, payload: pictureUrl })
}

export const getRecipe = recipeId => dispatch => {
  dispatch({ type: t.RECIPE_REQUEST, payload: true })

  return getSelectedRecipe(recipeId)
    .then(({ data }) => {
      dispatch({ type: t.RECIPE_SUCCESS, payload: data })
    })
    .catch(() => {
      dispatch({ type: t.RECIPE_REQUEST, payload: false })
    })
}

export const likeRecipe = (
  recipeId,
  count,
  selectedRecipe,
  category
) => dispatch => {
  dispatch({ type: t.LIKE_REQUEST, payload: true })
  return getLikeRecipe(recipeId)
    .then(res => {
      let type

      switch (category) {
        case 'timeline':
          type = timelineTypes
          break
        case 'bookmark':
          type = bookmarkTypes
          break
        case 'explore':
          type = exploreTypes
          break
        default:
          type = timelineTypes
      }

      dispatch({ type: t.LIKE_RECIPE, payload: recipeId })
      dispatch({
        type: type.UPDATE_LIKE_COUNT,
        payload: { id: recipeId, count: count }
      })
      if (selectedRecipe) {
        dispatch({
          type: t.UPDATE_LIKE_COUNT,
          payload: { id: recipeId, count: count }
        })
      }
    })
    .catch(() => {
      dispatch({ type: t.LIKE_REQUEST, payload: false })
    })
}

export const unlikeRecipe = (
  recipeId,
  count,
  selectedRecipe,
  category
) => dispatch => {
  dispatch({ type: t.LIKE_REQUEST, payload: true })
  return getUnlikeRecipe(recipeId)
    .then(res => {
      let type

      switch (category) {
        case 'timeline':
          type = timelineTypes
          break
        case 'bookmark':
          type = bookmarkTypes
          break
        case 'explore':
          type = exploreTypes
          break
        default:
          type = timelineTypes
      }

      dispatch({ type: t.UNLIKE_RECIPE, payload: recipeId })
      dispatch({
        type: type.UPDATE_LIKE_COUNT,
        payload: { id: recipeId, count: count }
      })
      if (selectedRecipe) {
        dispatch({
          type: t.UPDATE_LIKE_COUNT,
          payload: { id: recipeId, count: count }
        })
      }
    })
    .catch(() => {
      dispatch({ type: t.LIKE_REQUEST, payload: false })
    })
}

export const bookmarkRecipe = (
  recipeId,
  count,
  selectedRecipe,
  category
) => dispatch => {
  dispatch({ type: t.BOOKMARK_REQUEST, payload: true })
  return getBookmarkRecipe(recipeId)
    .then(res => {
      let type

      switch (category) {
        case 'timeline':
          type = timelineTypes
          break
        case 'bookmark':
          type = bookmarkTypes
          break
        case 'explore':
          type = exploreTypes
          break
        default:
          type = timelineTypes
      }

      dispatch({ type: t.BOOKMARK_RECIPE, payload: recipeId })
      dispatch({
        type: type.UPDATE_BOOKMARK_COUNT,
        payload: { id: recipeId, count: count }
      })
      if (selectedRecipe) {
        dispatch({
          type: t.UPDATE_BOOKMARK_COUNT,
          payload: { id: recipeId, count: count }
        })
      }
    })
    .catch(() => {
      dispatch({ type: t.BOOKMARK_REQUEST, payload: false })
    })
}

export const unBookmarkRecipe = (
  recipeId,
  count,
  selectedRecipe,
  category
) => dispatch => {
  dispatch({ type: t.BOOKMARK_REQUEST, payload: true })
  return getUnbookmarkRecipe(recipeId)
    .then(res => {
      let type

      switch (category) {
        case 'timeline':
          type = timelineTypes
          break
        case 'bookmark':
          type = bookmarkTypes
          break
        case 'explore':
          type = exploreTypes
          break
        default:
          type = timelineTypes
      }

      dispatch({ type: t.UNBOOKMARK_RECIPE, payload: recipeId })
      dispatch({
        type: type.UPDATE_BOOKMARK_COUNT,
        payload: { id: recipeId, count: count }
      })
      if (selectedRecipe) {
        dispatch({
          type: t.UPDATE_BOOKMARK_COUNT,
          payload: { id: recipeId, count: count }
        })
      }
    })
    .catch(() => {
      dispatch({ type: t.COMMENT_REQUEST, payload: false })
    })
}

export const followUser = userHandle => dispatch => {
  dispatch({ type: t.FOLLOW_REQUEST, payload: true })
  return getFollow(userHandle)
    .then(res => {
      dispatch({ type: t.FOLLOW_USER, payload: userHandle })
    })
    .catch(() => {
      dispatch({ type: t.FOLLOW_REQUEST, payload: false })
    })
}

export const unfollowUser = userHandle => dispatch => {
  dispatch({ type: t.FOLLOW_REQUEST, payload: true })
  return getUnfollow(userHandle)
    .then(res => {
      dispatch({ type: t.UNFOLLOW_USER, payload: userHandle })
    })
    .catch(() => {
      dispatch({ type: t.FOLLOW_REQUEST, payload: false })
    })
}

export const getTags = () => dispatch => {
  return fetchTags()
    .then(({ data }) => {
      return data.map(el => ({
        label: el.color,
        ...el
      }))
    })
    .then(formated => dispatch({ type: t.SET_TAGS, payload: formated }))
}

export const postComment = (recipeId, comment) => dispatch => {
  dispatch({ type: t.COMMENT_REQUEST, payload: true })

  return createComment(recipeId, comment)
    .then(({ data }) => {
      dispatch({ type: t.COMMENT_SUCCESS, payload: data })
    })
    .catch(() => {
      dispatch({ type: t.COMMENT_REQUEST, payload: false })
    })
}

export const addNewRecipe = body => dispatch => {
  dispatch({ type: t.CREATE_RECIPE_REQUEST, payload: true })

  return createRecipe(body).then(({ data }) => {
    dispatch({ type: t.CREATE_RECIPE_SUCCESS, payload: data })
  })
}

export const recipeDelete = recipeId => dispatch => {
  dispatch({ type: t.DELETE_RECIPE_REQUEST })

  return deleteRecipe(recipeId).then(() => {
    dispatch({ type: t.DELETE_RECIPE_SUCCESS, payload: recipeId })
    history.push('/')
  })
}
