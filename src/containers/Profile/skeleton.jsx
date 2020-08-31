import React from 'react'
import ProfileHeaderSkeleton from '../../components/ProfileHeader/skeleton'
import PostSkeleton from '../Post/skeleton'

function ProfileContainerSkeleton() {
  return (
    <>
      <ProfileHeaderSkeleton />
      <div className="profile-posts-wrap">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </>
  )
}

export default ProfileContainerSkeleton
