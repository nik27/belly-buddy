import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Badge } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import NotificationMenuItem from '../NotificationMenuItem'

function NotificationMenu(props) {
  const {
    notifications,
    goToNotification,
    getNotificationText,
    ...other
  } = props
  const [count, setCount] = useState(0)

  useEffect(() => {
    getCount(notifications)
  }, [notifications])

  const getCount = notif => {
    const unreadNotifications = Object.keys(notif).filter(
      el => notif[el].read === false
    )
    setCount(unreadNotifications.length)
  }

  return (
    <Menu.SubMenu
      key="notifications-submenu"
      className="notification"
      selectable={false}
      icon={
        <Link to="/notifications">
          <Badge count={count}>
            <BellTwoTone twoToneColor="#91B7D1" />
          </Badge>
        </Link>
      }
      {...other}>
      {notifications.map((item, index) => (
        <NotificationMenuItem
          key={index}
          notification={item}
          goToNotification={goToNotification}
          getNotificationText={getNotificationText}
        />
      ))}
    </Menu.SubMenu>
  )
}

NotificationMenu.propTypes = {
  notifications: PropTypes.array.isRequired,
  goToNotification: PropTypes.func.isRequired,
  getNotificationText: PropTypes.func.isRequired
}

export default NotificationMenu
