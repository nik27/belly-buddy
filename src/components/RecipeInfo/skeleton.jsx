import React from 'react'
import { Col, Divider, Skeleton, Space } from 'antd'
import './style.scss'

function RecipeInfoSkeleton(props) {
  return (
    <Col className="recipe-info">
      <Space>
        <Skeleton.Button shape="round" active />
        <Skeleton.Button shape="round" active />
      </Space>
      <Divider type="vertical" />
      <Space>
        <Skeleton.Button shape="round" active />
        <Skeleton.Button shape="round" active />
      </Space>
    </Col>
  )
}

RecipeInfoSkeleton.propTypes = {}

export default RecipeInfoSkeleton
