import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

function FormImageUpload(props) {
  const { value = [], imageUpload, onChange, onRemove, isMain } = props

  const triggerChange = changedValue => {
    if (onChange) {
      onChange(changedValue)
    }
  }

  const handleChange = ({ fileList }) => {
    triggerChange(fileList)
  }

  return (
    <ImgCrop grid aspect={isMain ? 1 / 1 : 12 / 5}>
      <Upload
        listType="picture-card"
        fileList={value}
        customRequest={imageUpload}
        onChange={handleChange}
        onRemove={onRemove}
        headers={`${isMain}`}
        accept="image/*">
        {isMain
          ? value.length === 0 && '+ Upload'
          : value.length < 4 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

FormImageUpload.propTypes = {
  value: PropTypes.array.isRequired,
  imageUpload: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isMain: PropTypes.bool
}

export default FormImageUpload
