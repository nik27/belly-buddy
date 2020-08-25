import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, Tag } from 'antd'

function TagRender(props) {
  const { label, value, onClose } = props

  return (
    <Tag color={value} closable onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  )
}

function FormTagSelect(props) {
  const { options } = props
  const [selectedItems, setSelectedItems] = useState([])

  const filteredOptions = options.filter(
    option => !selectedItems.includes(option.value)
  )

  const handleChange = selectedItems => {
    console.log(selectedItems)
    setSelectedItems(selectedItems)
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string
    })
  )
}

export default FormTagSelect
