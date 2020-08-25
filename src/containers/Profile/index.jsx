import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'
import ProfileHeader from '../../components/ProfileHeader'
import './style.scss'

function ProfileContainer(props) {
  const { user, recipe } = props

  return (
    <>
      <ProfileHeader
        handle={user.handle}
        profilePicture={user.profilePicture}
        name={user.name}
      />
      <div className="profile-posts-wrap">
        <Post user={user} recipe={recipe} />
        <Post user={user} recipe={recipe} />
        <Post user={user} recipe={recipe} />
        <Post user={user} recipe={recipe} />
      </div>
    </>
  )
}

ProfileContainer.propTypes = {
  user: PropTypes.instanceOf(Object),
  recipe: PropTypes.instanceOf(Object)
}

export default ProfileContainer
