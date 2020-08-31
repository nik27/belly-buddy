import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input, Tooltip } from 'antd'
import {
  MinusCircleOutlined,
  PlusOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'

function DynamicFields(props) {
  const { name, tooltip, placeholder, required } = props

  const { TextArea } = Input

  return (
    <Form.List name={`${name}s`}>
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <Form.Item
                label={
                  index === 0 ? (
                    <span className="form-item-label">
                      {name}&nbsp;
                      <Tooltip title={tooltip}>
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  ) : (
                    ''
                  )
                }
                required={required}
                key={`${name}-${field.key}`}>
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: required,
                      whitespace: true,
                      message:
                        fields.length > 1
                          ? `Please input ${name} or delete this field.`
                          : `At least one ${name} is required`
                    }
                  ]}
                  noStyle>
                  <TextArea
                    placeholder={placeholder}
                    className="add-new-form-dynamic-input"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    style={{ margin: '0 8px' }}
                    onClick={() => {
                      remove(field.name)
                    }}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add()
                }}>
                <PlusOutlined /> Add {name}
              </Button>
            </Form.Item>
          </div>
        )
      }}
    </Form.List>
  )
}

DynamicFields.propTypes = {
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool
}

DynamicFields.defaultProps = {
  required: false
}

export default DynamicFields
