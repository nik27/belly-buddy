import * as t from '../types/session'
import { PURGE } from 'redux-persist'

const initialState = {
  signUpError: null,
  signUpLoading: false,
  currentUser: null,
  selectedProfile: null,
  selectedProfileLoading: false,
  selectedRecipe: null,
  selectedRecipeLoading: false,
  tags: [],
  likeLoading: false,
  bookmarkLoading: false,
  followLoading: false,
  commentPosting: false,
  createRecipeLoading: false,
  deleteRecipeLoading: false
}

export default function session(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case t.SET_SESSION_USER:
      return {
        ...state,
        currentUser: payload
      }
    case t.SIGN_UP_REQUEST:
      return {
        ...state,
        signUpError: null,
        signUpLoading: true
      }
    case t.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpError: null,
        signUpLoading: false
      }
    case t.SIGN_UP_FAIL:
      return {
        ...state,
        signUpError: payload,
        signUpLoading: false
      }
    case t.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          credentials: {
            ...state.currentUser.credentials,
            profilePicture: payload
          }
        }
      }
    case t.SET_SELECTED_PROFILE:
      return {
        ...state,
        selectedProfileLoading: false,
        selectedProfile: payload
      }
    case t.PROFILE_REQUEST:
      return {
        ...state,
        selectedProfileLoading: payload
      }
    case t.RECIPE_REQUEST:
      return {
        ...state,
        selectedRecipeLoading: payload
      }
    case t.RECIPE_SUCCESS:
      return {
        ...state,
        selectedRecipeLoading: false,
        selectedRecipe: payload
      }
    case t.RECIPE_WIPE:
      return {
        ...state,
        selectedRecipe: null
      }
    case t.LIKE_RECIPE:
      return {
        ...state,
        likeLoading: false,
        currentUser: {
          ...state.currentUser,
          likes: [...state.currentUser.likes, payload]
        }
      }
    case t.UNLIKE_RECIPE:
      return {
        ...state,
        likeLoading: false,
        currentUser: {
          ...state.currentUser,
          likes: state.currentUser.likes.filter(el => el !== payload)
        }
      }
    case t.UPDATE_LIKE_COUNT:
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          recipes: [
            ...state.selectedProfile.recipes.filter(el => el.id !== payload.id),
            {
              ...state.selectedProfile.recipes.find(el => el.id === payload.id),
              likeCount: payload.count
            }
          ]
        }
      }
    case t.UPDATE_SELECTED_RECIPE_LIKE_COUNT:
      return {
        ...state,
        selectedRecipe: {
          ...state.selectedRecipe,
          likeCount: payload.count
        }
      }
    case t.LIKE_REQUEST:
      return {
        ...state,
        likeLoading: payload
      }
    case t.BOOKMARK_RECIPE:
      return {
        ...state,
        bookmarkLoading: false,
        currentUser: {
          ...state.currentUser,
          bookmarks: [...state.currentUser.bookmarks, payload]
        }
      }
    case t.UNBOOKMARK_RECIPE:
      return {
        ...state,
        bookmarkLoading: false,
        currentUser: {
          ...state.currentUser,
          bookmarks: state.currentUser.bookmarks.filter(el => el !== payload)
        }
      }
    case t.BOOKMARK_REQUEST:
      return {
        ...state,
        bookmarkLoading: payload
      }
    case t.UPDATE_BOOKMARK_COUNT:
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          recipes: [
            ...state.selectedProfile.recipes.filter(el => el.id !== payload.id),
            {
              ...state.selectedProfile.recipes.find(el => el.id === payload.id),
              bookmarkCount: payload.count
            }
          ]
        }
      }
    case t.FOLLOW_USER:
      return {
        ...state,
        followLoading: false,
        currentUser: {
          ...state.currentUser,
          follows: [...state.currentUser.follows, payload]
        }
      }
    case t.UNFOLLOW_USER:
      return {
        ...state,
        followLoading: false,
        currentUser: {
          ...state.currentUser,
          follows: state.currentUser.follows.filter(el => el !== payload)
        }
      }
    case t.FOLLOW_REQUEST:
      return {
        ...state,
        followLoading: payload
      }
    case t.COMMENT_REQUEST:
      return {
        ...state,
        commentPosting: payload
      }
    case t.COMMENT_SUCCESS:
      return {
        ...state,
        commentPosting: false,
        selectedRecipe: {
          ...state.selectedRecipe,
          comments: [payload, ...state.selectedRecipe.comments]
        }
      }
    case t.SET_TAGS:
      return {
        ...state,
        tags: payload
      }
    case t.CREATE_RECIPE_REQUEST:
      return {
        ...state,
        createRecipeLoading: payload
      }
    case t.CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        createRecipeLoading: false
      }
    case t.DELETE_RECIPE_REQUEST:
      return {
        ...state,
        deleteRecipeLoading: true
      }
    case t.DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        deleteRecipeLoading: false
      }
    case PURGE:
      return initialState
    default:
      return state
  }
}
