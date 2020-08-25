import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Comment as AntDComment, Avatar } from 'antd'

function Comment(props) {
  const { children } = props

  return (
    <AntDComment
      // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<Link to="/1">Han Solo</Link>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }>
      {children}
    </AntDComment>
  )
}

Comment.propTypes = {
  children: PropTypes.instanceOf(React.Component)
}

export default Comment
