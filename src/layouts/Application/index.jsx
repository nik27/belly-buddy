import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { renderRoutes } from 'react-router-config'
import { useDispatch, useSelector } from 'react-redux'
import { BackTop, Col, Layout, Row } from 'antd'
import {
  getUserInLocalStorage,
  getTags,
  getNotification
} from '../../flex/actions'
import {
  getCurrentUserHandle,
  getProfilePicture,
  getNotificationSuper
} from '../../flex/selectors'
import { isLoggedIn } from '../../utils/authentication'
import { get } from '../../utils/storage'
import './style.scss'

import FooterContent from '../../components/Footer'
import HeaderContainer from '../../containers/Header'

function Application(props) {
  const dispatch = useDispatch()
  const { route } = props
  const { Header, Content, Footer } = Layout

  axios.defaults.headers.Authorization = get('localStorage', 'token')

  const userHandle = useSelector(state => getCurrentUserHandle(state))
  const notifications = useSelector(state => getNotificationSuper(state))
  const profilePicture = useSelector(state => getProfilePicture(state))

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInLocalStorage())
      dispatch(getTags())
      dispatch(getNotification())
    }
  }, [dispatch])

  return (
    <Layout className="app-wrap">
      <BackTop />
      <Header className="app-header">
        <Row type="flex" justify="center">
          <Col xs={24} md={22} xxl={12}>
            <HeaderContainer
              userHandle={userHandle}
              notifications={notifications}
              profilePicture={profilePicture}
            />
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
