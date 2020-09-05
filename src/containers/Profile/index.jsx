import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'
import ProfileHeader from '../../components/ProfileHeader'
import './style.scss'

function ProfileContainer(props) {
  const { user, recipes, changeProfilePicture, category } = props

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
              category={category}
            />
          ))}
      </div>
    </>
  )
}

ProfileContainer.propTypes = {
  user: PropTypes.instanceOf(Object),
  recipes: PropTypes.array.isRequired,
  changeProfilePicture: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
}

export default ProfileContainer
