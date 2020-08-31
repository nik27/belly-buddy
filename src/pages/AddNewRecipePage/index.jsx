import React from 'react'
import AddNewRecipeContainer from '../../containers/FormAddRecipe'
// import PropTypes from 'prop-types'
import './style.scss'

function AddNewRecipePage(props) {
  return (
    <div className="add-new-recipe-page">
      <AddNewRecipeContainer />
    </div>
  )
}

AddNewRecipePage.propTypes = {}

export default AddNewRecipePage
