import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, Tooltip, Typography } from 'antd'
import { SaveOutlined, SaveFilled, DeleteOutlined } from '@ant-design/icons'
import {
  bookmarkRecipe,
  unBookmarkRecipe,
  followUser,
  unfollowUser,
  recipeDelete
} from '../../flex/actions'
import {
  getIsBookmarked,
  getIsUsers,
  getIsFollowed,
  isLoadingFollow
} from '../../flex/selectors'
import './style.scss'

function RecipeTitle(props) {
  const { user, recipeId, title, bookmarkCount, selectedRecipe } = props
  const dispatch = useDispatch()
  const isBookmarked = useSelector(state =>
    getIsBookmarked(state, recipeId, bookmarkCount)
  )
  const isUsers = useSelector(state => getIsUsers(state, user.userHandle))
  const isFollowed = useSelector(state => getIsFollowed(state, user.userHandle))
  const isLoadingF = useSelector(state => isLoadingFollow(state))

  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(unBookmarkRecipe(recipeId, bookmarkCount - 1, selectedRecipe))
    } else {
      dispatch(bookmarkRecipe(recipeId, bookmarkCount + 1, selectedRecipe))
    }
  }

  const toggleFollow = () => {
    if (isFollowed) {
      dispatch(unfollowUser(user.userHandle))
    } else {
      dispatch(followUser(user.userHandle))
    }
  }

  const deleteRecipe = () => {
    dispatch(recipeDelete(recipeId))
  }

  return (
    <div className="recipe-title">
      <div className="user-wrap">
        <Link to={`/${user.userHandle}`} className="user-wrap-link">
          <Avatar src={user.profilePicture} />
          <div className="user-text">
            <Typography.Text>{user.userName}</Typography.Text>
            <br />
            <Typography.Text type="secondary">
              @{user.userHandle}
            </Typography.Text>
          </div>
        </Link>

        {!isUsers
          ? (isFollowed && (
              <Button
                size="small"
                className="follow-button"
                loading={isLoadingF}
                onClick={() => toggleFollow()}>
                Unfollow
              </Button>
            )) || (
              <Button
                size="small"
                type="primary"
                className="follow-button"
                loading={isLoadingF}
                onClick={() => toggleFollow()}>
                Follow
              </Button>
            )
          : null}
      </div>
      <div className="title-wrap">
        <Link className="title-link" to={`/${user.userHandle}/${recipeId}`}>
          <Typography.Title level={2}>{title}</Typography.Title>
        </Link>
        <div className="buttons-wrap">
          {(!isUsers && (
            <Tooltip
              title={isBookmarked ? 'Remove from saved' : 'Save this recipe'}
              color="#97D191"
              key="bookmark">
              <Button
                shape="circle"
                icon={
                  isBookmarked ? (
                    <SaveFilled style={{ color: '#97D191' }} />
                  ) : (
                    <SaveOutlined style={{ color: '#97D191' }} />
                  )
                }
                size="large"
                onClick={() => toggleBookmark()}
              />
            </Tooltip>
          )) || (
            <Tooltip title={'Delete this recipe'} color="#FF4E50" key="delete">
              <Button
                shape="circle"
                icon={<DeleteOutlined style={{ color: '#FF4E50' }} />}
                size="large"
                onClick={() => deleteRecipe()}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}

RecipeTitle.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  bookmarkCount: PropTypes.number.isRequired,
  recipeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectedRecipe: PropTypes.bool
}

RecipeTitle.defaultProps = {
  selectedRecipe: false
}

export default RecipeTitle
