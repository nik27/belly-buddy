import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

function RecipeDetails(props) {
  const { details } = props

  return (
    <List
      itemLayout="horizontal"
      dataSource={details}
      renderItem={item => <List.Item>{item.text}</List.Item>}
    />
  )
}

RecipeDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default RecipeDetails
