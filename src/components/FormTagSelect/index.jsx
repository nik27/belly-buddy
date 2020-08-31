import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, Tag } from 'antd'

function TagRender(props) {
  const { value, onClose } = props
  return (
    <Tag closable onClose={onClose} style={{ marginRight: 3 }}>
      {value}
    </Tag>
  )
}

function FormTagSelect(props) {
  const { options, value = [], onChange } = props
  const [selectedItems, setSelectedItems] = useState([])

  const filteredOptions = options.filter(
    option => !selectedItems.includes(option.value)
  )

  const triggerChange = changedValue => {
    if (onChange) {
      onChange([...value, ...changedValue])
    }
  }

  const handleChange = selectedItems => {
    setSelectedItems(selectedItems)
    triggerChange(selectedItems)
  }

  return (
    <Select
      mode="multiple"
      tagRender={TagRender}
      value={selectedItems}
      onChange={handleChange}
      style={{ width: '100%' }}>
      {filteredOptions.map(item => (
        <Select.Option key={item.value} value={item.value}>
          {item.value}
        </Select.Option>
      ))}
    </Select>
  )
}

TagRender.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClose: PropTypes.func
}

FormTagSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
}

export default FormTagSelect
