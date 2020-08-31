import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Badge, Menu, Typography } from 'antd'
import './style.scss'

function NotificationMenuItem(props) {
  const {
    notification,
    goToNotification,
    getNotificationText,
    ...other
  } = props

  return (
    <Menu.Item {...other}>
      <Link className="notification-wrap" to={goToNotification(notification)}>
        {notification.read ? null : <Badge status="processing" />}
        <Typography.Text type="secondary" className="test">
          {new Date(notification.createdAt).toLocaleString()}
        </Typography.Text>
        {getNotificationText(notification)}
      </Link>
    </Menu.Item>
  )
}

NotificationMenuItem.propTypes = {
  notification: PropTypes.object.isRequired,
  goToNotification: PropTypes.func.isRequired,
  getNotificationText: PropTypes.func.isRequired
}

export default NotificationMenuItem
