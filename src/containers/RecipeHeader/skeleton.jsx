import React from 'react'
import { Col, Row } from 'antd'
import RecipeTitleSkeleton from '../../components/RecipeTitle/skeleton'
import RecipeTagListSkeleton from '../../components/RecipeTagList/skeleton'
import './style.scss'

function RecipeHeaderSkeleton() {
  return (
    <Row className="recipe-header" justify="center">
      <Col xs={24}>
        <RecipeTitleSkeleton />
      </Col>
      <Col>
        <RecipeTagListSkeleton />
      </Col>
    </Row>
  )
}

export default RecipeHeaderSkeleton
