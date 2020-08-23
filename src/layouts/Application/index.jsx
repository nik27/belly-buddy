import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Col, Layout, Row } from 'antd'
import './style.scss'

import FooterContent from '../../components/Footer'
import HeaderContent from '../../components/Header'

function Application(props) {
  const { route } = props
  const { Header, Content, Footer } = Layout

  return (
    <Layout className="app-wrap">
      <Header className="app-header">
        <Row type="flex" justify="center">
          <Col xs={24} md={20} xxl={10}>
            <HeaderContent />
          </Col>
        </Row>
      </Header>
      <Content className="app-content">
        <Row type="flex" justify="center">
          <Col xs={24} xl={22} xxl={11} className="content-wrap">
            {renderRoutes(route.routes)}
          </Col>
        </Row>
      </Content>
      <Footer className="auth-footer">
        <FooterContent />
      </Footer>
    </Layout>
  )
}

Application.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
}

export default Application
