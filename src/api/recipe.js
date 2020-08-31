import axios from 'axios'

export const fetchRecipe = recipeId => axios.get(`/recipe/${recipeId}`)

export const fetchRecipeTimelineInitial = () => axios.get('/recipes/timeline')

export const fetchRecipeTimelineNext = lastTimestamp =>
  axios.get(`/recipes/timeline/${lastTimestamp}`)

export const fetchRecipeExploreInitial = () => axios.get('/recipes/explore')

export const fetchRecipeExploreNext = lastTimestamp =>
  axios.get(`/recipes/explore/${lastTimestamp}`)

export const fetchRecipeBookmarkInitial = () => axios.get('/recipes/bookmark')

export const fetchRecipeBookmarkNext = lastTimestamp =>
  axios.get(`/recipes/bookmark/${lastTimestamp}`)

export const createRecipe = body => axios.post('/recipe', body)

export const likeRecipe = recipeId => axios.get(`/recipe/${recipeId}/like`)

export const unlikeRecipe = recipeId => axios.get(`/recipe/${recipeId}/unlike`)

export const createComment = (recipeId, body) =>
  axios.post(`/recipe/${recipeId}/comment`, { body })

export const uploadRecipeImage = (data, config) =>
  axios.post('/recipe/uploadPicture', data, config)

export const deleteRecipeImage = imageName =>
  axios.get(`/recipe/deletePicture/${imageName}`)

export const deleteRecipe = recipeId => axios.delete(`/recipe/${recipeId}`)
