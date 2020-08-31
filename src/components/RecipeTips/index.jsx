import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

function RecipeTips(props) {
  const { tips } = props

  return (
    <List
      itemLayout="horizontal"
      dataSource={tips}
      renderItem={item => <List.Item>{item.tip}</List.Item>}
    />
  )
}

RecipeTips.propTypes = {
  tips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tip: PropTypes.string.isRequired
    })
  )
}

export default RecipeTips
