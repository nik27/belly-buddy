import React from 'react'
// import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './style.scss'

function RecipeTagList(props) {
  return (
    <>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
      <Tag color="magenta">magenta</Tag>
    </>
  )
}

RecipeTagList.propTypes = {}

export default RecipeTagList
