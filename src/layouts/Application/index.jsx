import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

function Application(props) {
  const { route } = props

  return <main>{renderRoutes(route.routes)}</main>
}

Application.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
}

export default Application
