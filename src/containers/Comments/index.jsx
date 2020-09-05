import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Divider } from 'antd'
import { postComment } from '../../redux/actions'
import { isPostingComment } from '../../redux/selectors'
import CommentEditor from '../../components/CommentEditor'
import CommentsList from '../../components/CommentsList'
import './style.scss'

function CommentsContainer(props) {
  const { show, setShow, commentsRef, recipeId, comments } = props
  const dispatch = useDispatch()
  const isSubmitting = useSelector(state => isPostingComment(state))
  const [value, setValue] = useState('')

  const handleSubmit = comment => {
    setValue('')
    dispatch(postComment(recipeId, comment))
  }

  return (
    <div className="comments-container-wrap" ref={commentsRef}>
      {show ? (
        <>
          <Divider>Comments</Divider>
          <div className="comment-editor-wrap">
            <CommentEditor
              handleSubmit={handleSubmit}
              submitting={isSubmitting}
              value={value}
              setValue={setValue}
            />
          </div>
          <CommentsList comments={comments} />
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
  setShow: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  commentsRef: PropTypes.any,
  recipeId: PropTypes.string.isRequired
}

export default CommentsContainer
