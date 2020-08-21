import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

function Authentication(props) {
  const { route } = props

  return <main>{renderRoutes(route.routes)}</main>
}

Authentication.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
}

export default Authentication
