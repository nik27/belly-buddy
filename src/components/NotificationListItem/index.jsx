import React from 'react'
import PropTypes from 'prop-types'
import { Badge, List, Typography } from 'antd'
import './style.scss'

function NotificationListItem(props) {
  const {
    notification,
    markNotification,
    getNotificationText,
    ...other
  } = props

  return (
    <List.Item {...other}>
      <div
        className="notification-wrap"
        onMouseEnter={() => markNotification(notification)}>
        {notification.read ? null : <Badge status="processing" />}
        <Typography.Text type="secondary" className="test">
          {new Date(notification.createdAt).toLocaleString()}
        </Typography.Text>
        {getNotificationText(notification)}
      </div>
    </List.Item>
  )
}

NotificationListItem.propTypes = {
  notification: PropTypes.object.isRequired,
  markNotification: PropTypes.func.isRequired,
  getNotificationText: PropTypes.func.isRequired
}

export default NotificationListItem
