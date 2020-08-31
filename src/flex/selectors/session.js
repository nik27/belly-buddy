import { createCachedSelector } from 're-reselect'

export const getSignUpError = state => state.session.signUpError

export const getSignUpLoading = state => state.session.signUpLoading

export const getCurrentUserHandle = state =>
  state.session.currentUser?.credentials.handle

export const getProfilePicture = state =>
  state.session.currentUser?.credentials.profilePicture

export const getNotifications = state => state.session.currentUser.notifications

export const getLikes = state => state.session.currentUser.likes

export const getBookmarks = state => state.session.currentUser.bookmarks

export const getFollows = state => state.session.currentUser.follows

export const isLoadingLike = state => state.session.likeLoading

export const isLoadingBookmark = state => state.session.bookmarkLoading

export const isLoadingFollow = state => state.session.followLoading

export const getSelectedProfile = state => state.session.selectedProfile

export const isSelectedProfileLoading = state =>
  state.session.selectedProfileLoading

export const getSelectedRecipe = state => state.session.selectedRecipe

export const isSelectedRecipeLoading = state =>
  state.session.selectedRecipeLoading

export const getIsLiked = createCachedSelector(
  getLikes,
  (state, recipeId, likeCount) => recipeId,
  (state, recipeId, likeCount) => likeCount,
  (likes, recipeId, likeCount) => likes.includes(recipeId)
)((state, recipeId, likeCount) => `${recipeId}${likeCount}likes`)

export const getIsBookmarked = createCachedSelector(
  getBookmarks,
  (state, recipeId, bookmarkCount) => recipeId,
  (state, recipeId, bookmarkCount) => bookmarkCount,
  (bookmarks, recipeId, bookmarkCount) => bookmarks.includes(recipeId)
)((state, recipeId, bookmarkCount) => `${recipeId}${bookmarkCount}bookmarks`)

export const getIsFollowed = createCachedSelector(
  getFollows,
  (state, userHandle) => userHandle,
  (follows, userHandle) => follows.includes(userHandle)
)((follows, userHandle) => `${follows?.length}${userHandle}`)

export const getIsUsers = createCachedSelector(
  getCurrentUserHandle,
  (state, userHandle) => userHandle,
  (currentHandle, userHandle) => currentHandle === userHandle
)((state, currentHandle, userHandle) => `${currentHandle}-${userHandle}`)

export const getTags = state => state.session.tags

export const isPostingComment = state => state.session.commentPosting

export const isCreateRecipeLoading = state => state.session.createRecipeLoading
