import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Comment, Avatar, Form, Button, Input } from 'antd'
import { getProfilePicture } from '../../flex/selectors'

function Editor(props) {
  const { submitting, onSubmit, onChange, value } = props

  return (
    <>
      <Form.Item>
        <Input.TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  )
}

function CommentEditor(props) {
  const { submitting, handleSubmit, value, setValue } = props
  const profilePicture = useSelector(state => getProfilePicture(state))

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <Comment
        avatar={<Avatar src={profilePicture} alt="Profile picture" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={() => handleSubmit(value)}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  )
}

Editor.propTypes = {
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

CommentEditor.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default CommentEditor
