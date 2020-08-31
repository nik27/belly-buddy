import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'
import ProfileHeader from '../../components/ProfileHeader'
import './style.scss'

function ProfileContainer(props) {
  const { user, recipes, changeProfilePicture } = props

  return (
    <>
      <ProfileHeader
        handle={user.handle}
        profilePicture={user.profilePicture}
        name={user.name}
        changeProfilePicture={changeProfilePicture}
      />
      <div className="profile-posts-wrap">
        {recipes.length > 0 &&
          recipes.map(recipe => (
            <Post
              key={recipe.id}
              recipe={recipe}
              likeCount={recipe.likeCount}
              commentCount={recipe.commentCount}
              bookmarkCount={recipe.bookmarkCount}
            />
          ))}
      </div>
    </>
  )
}

ProfileContainer.propTypes = {
  user: PropTypes.instanceOf(Object),
  recipes: PropTypes.array.isRequired,
  changeProfilePicture: PropTypes.func.isRequired
}

export default ProfileContainer
