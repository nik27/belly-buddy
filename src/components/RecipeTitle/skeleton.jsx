import React from 'react'
import { Skeleton, Space } from 'antd'
import './style.scss'

function RecipeTitleSkeleton() {
  return (
    <div className="recipe-title recipe-title-skeleton">
      <div className="user-wrap">
        <Skeleton.Avatar shape="circle" active />
        <div className="user-text">
          <Skeleton.Button size="small" active />
          <br />
          <Skeleton.Button size="small" active />
        </div>
      </div>
      <div className="title-wrap">
        <Skeleton.Button size="small" active className="title-link" />
        <div className="buttons-wrap">
          <Space>
            <Skeleton.Button shape="circle" active />
          </Space>
        </div>
      </div>
    </div>
  )
}

export default RecipeTitleSkeleton
