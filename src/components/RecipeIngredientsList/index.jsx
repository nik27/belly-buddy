import React from 'react'
import PropTypes from 'prop-types'
import { List, Typography } from 'antd'
import './style.scss'

function IngredientsList(props) {
  const { listItems } = props

  return (
    <div className="ingredients-list-wrap">
      <List
        header={<Typography.Title level={3}>Ingredients</Typography.Title>}
        bordered
        dataSource={listItems}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  )
}

IngredientsList.propTypes = {
  listItems: PropTypes.instanceOf(Array)
}

export default IngredientsList
