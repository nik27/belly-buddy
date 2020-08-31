import React from 'react'
import { Row, Skeleton } from 'antd'
import RecipeHeaderSkeleton from '../RecipeHeader/skeleton'
import RecipeInfoSkeleton from '../../components/RecipeInfo/skeleton'
import './style.scss'

function PostSkeleton() {
  return (
    <div className="post-wrap skeleton">
      <div className="image-wrap">
        <div className="image">
          <Skeleton.Button active />
        </div>
      </div>
      <div className="recipe-wrap">
        <RecipeHeaderSkeleton />
        <Row className="recipe-body">
          <Skeleton paragraph={{ rows: 5 }} active />
          <RecipeInfoSkeleton />
        </Row>
      </div>
    </div>
  )
}

export default PostSkeleton
