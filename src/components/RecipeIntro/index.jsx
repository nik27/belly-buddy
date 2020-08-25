import React from 'react'
import PropTypes from 'prop-types'
import { Col, Typography } from 'antd'
import './style.scss'

function RecipeIntro(props) {
  const { intro } = props

  return (
    <Col>
      <Typography.Paragraph>{intro}</Typography.Paragraph>
    </Col>
  )
}

RecipeIntro.propTypes = {
  intro: PropTypes.string.isRequired
}

export default RecipeIntro
