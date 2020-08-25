import React from 'react'
import PropTypes from 'prop-types'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

function FormImageUpload(props) {
  const { files } = props

  return (
    <ImgCrop grid>
      <Upload listType="picture-card" fileList={files}>
        {files.length < 4 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

FormImageUpload.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}

export default FormImageUpload
