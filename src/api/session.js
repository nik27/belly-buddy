import axios from 'axios'

export const signUp = body => axios.post('/signup', body)

export const apiTokenAuth = body => axios.post('/login', body)

export const getCurrentUser = () => axios.get('/user/details')

export const getSelectedProfile = userHandle => axios.get(`/user/${userHandle}`)

export const getSelectedRecipe = recipeId => axios.get(`/recipe/${recipeId}`)

export const getLikeRecipe = recipeId => axios.get(`/recipe/${recipeId}/like`)

export const getUnlikeRecipe = recipeId =>
  axios.get(`/recipe/${recipeId}/unlike`)

export const getBookmarkRecipe = recipeId =>
  axios.get(`/recipe/${recipeId}/bookmark`)

export const getUnbookmarkRecipe = recipeId =>
  axios.get(`/recipe/${recipeId}/remove-bookmark`)

export const fetchTags = () => axios.get('/tags')

export const getFollow = handle => axios.get(`/user/${handle}/follow`)

export const getUnfollow = handle => axios.get(`/user/${handle}/unfollow`)

export const uploadProfilePicture = (data, config) =>
  axios.post('/user/profile-picture', data, config)
