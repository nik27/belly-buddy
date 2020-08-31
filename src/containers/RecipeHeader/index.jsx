import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'
import RecipeTitle from '../../components/RecipeTitle'
import './style.scss'
import RecipeTagList from '../../components/RecipeTagList'

function RecipeHeader(props) {
  const { user, recipeId, portions, tags, time, title, bookmarkCount } = props

  return (
    <Row className="recipe-header" justify="center">
      <Col xs={24}>
        <RecipeTitle
          user={user}
          recipeId={recipeId}
          title={title}
          portions={portions}
          time={time}
          bookmarkCount={bookmarkCount}
        />
      </Col>
      <Col xs={24} className="tag-wrap">
        <RecipeTagList tags={tags} />
      </Col>
    </Row>
  )
}

RecipeHeader.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  recipeId: PropTypes.string.isRequired,
  portions: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookmarkCount: PropTypes.number.isRequired
}

export default RecipeHeader
