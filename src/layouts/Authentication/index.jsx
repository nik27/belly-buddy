import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Col, Layout, Row } from 'antd'
import './style.scss'

import FooterContent from '../../components/Footer'

function Authentication(props) {
  const { route } = props
  const { Content, Footer } = Layout

  return (
    <Layout className="auth-wrapper">
      <Content>
        <Row className="auth-row">
          <Col xs={24} xl={13} xxl={8} className="auth-col form-wrap">
            {renderRoutes(route.routes)}
          </Col>
          <Col xs={0} xl={0} xxl={6} className="auth-wave"></Col>
        </Row>
      </Content>
      <Footer className="auth-footer">
        <FooterContent />
      </Footer>
    </Layout>
  )
}

Authentication.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
}

export default Authentication
