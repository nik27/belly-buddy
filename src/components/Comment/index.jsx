import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Comment as AntDComment, Avatar } from 'antd'

function Comment(props) {
  const { userHandle, userName, profilePicture, body, createdAt } = props

  return (
    <AntDComment
      author={<Link to={`/${userHandle}`}>{userName}</Link>}
      avatar={<Avatar src={profilePicture} alt={userHandle} />}
      content={<p>{body}</p>}
      datetime={new Date(createdAt).toLocaleString()}></AntDComment>
  )
}

Comment.propTypes = {
  userHandle: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Comment
