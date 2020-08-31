import React from 'react'
import { Skeleton } from 'antd'
import './style.scss'

function ProfileHeaderSkeleton() {
  return (
    <div className="profile-header-wrap skeleton">
      <div className="profile-image-wrap">
        <Skeleton.Button active shape="circle" />
      </div>
      <div className="profile-info-wrap">
        <Skeleton.Button active />
        <Skeleton.Button active />
      </div>
    </div>
  )
}

export default ProfileHeaderSkeleton
