import React from 'react'
import { Skeleton, Space } from 'antd'
import './style.scss'

function RecipeTagListSkeleton(props) {
  return (
    <Space size="middle">
      <Skeleton.Button size="small" active />
      <Skeleton.Button size="small" active />
      <Skeleton.Button size="small" active />
      <Skeleton.Button size="small" active />
      <Skeleton.Button size="small" active />
    </Space>
  )
}

export default RecipeTagListSkeleton
