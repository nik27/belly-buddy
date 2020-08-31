import React from 'react'
import RecipeInfoSkeleton from '../../components/RecipeInfo/skeleton'
import RecipeHeaderSkeleton from '../RecipeHeader/skeleton'
import { Skeleton } from 'antd'
import './style.scss'

function RecipeBody() {
  return (
    <div className="recipe-body-wrap">
      <div className="recipe-info-wrap">
        <RecipeInfoSkeleton />
      </div>
      <div className="recipe-header-wrap">
        <RecipeHeaderSkeleton />
      </div>
      <div className="recipe-details-wrap skeleton">
        <div className="ingredients-list">
          <Skeleton active paragraph={{ rows: 3 }} />
        </div>
        <div className="recipe-details">
          <Skeleton active paragraph={{ rows: 7 }} />
        </div>
      </div>
    </div>
  )
}

export default RecipeBody
