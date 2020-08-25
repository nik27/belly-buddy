import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider } from 'antd'
import CommentEditor from '../../components/CommentEditor'
import CommentsList from '../../components/CommentsList'
import './style.scss'

function CommentsContainer(props) {
  const { show, setShow } = props

  return (
    <div className="comments-container-wrap">
      {show ? (
        <>
          <Divider>Comments</Divider>
          <div className="comment-editor-wrap">
            <CommentEditor />
          </div>
          <CommentsList />
        </>
      ) : (
        <Button type="dashed" size="large" onClick={() => setShow(true)}>
          Show Comments
        </Button>
      )}
    </div>
  )
}

CommentsContainer.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}

export default CommentsContainer
