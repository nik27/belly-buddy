import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment'

function CommentsList(props) {
  const { comments } = props

  return (
    (comments &&
      comments
        .sort((a, b) => a.createdAt > b.createdAt)
        .map(el => (
          <Comment
            key={el.id}
            body={el.body}
            userHandle={el.userHandle}
            userName={el.userName}
            profilePicture={el.profilePicture}
            createdAt={el.createdAt}
          />
        ))) || <div />
  )
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({}))
}

export default CommentsList
