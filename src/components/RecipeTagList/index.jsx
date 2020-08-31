import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import './style.scss'

function RecipeTagList(props) {
  const { tags } = props

  return (
    <>
      {tags &&
        tags.map(el => (
          <Tag key={el.value} color={el.color} className="tag">
            {el.value}
          </Tag>
        ))}
    </>
  )
}

RecipeTagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      color: PropTypes.string
    })
  )
}

RecipeTagList.defaultProps = {
  tags: []
}

export default RecipeTagList
