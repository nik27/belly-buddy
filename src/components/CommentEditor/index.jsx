import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Comment, Avatar, Form, Button, Input } from 'antd'

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
  const { submitting, handleSubmit } = props
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
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
  handleSubmit: PropTypes.func.isRequired
}

export default CommentEditor
