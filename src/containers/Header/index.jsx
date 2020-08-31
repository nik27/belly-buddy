import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Avatar, Menu } from 'antd'
import {
  HomeTwoTone,
  SaveTwoTone,
  PlusOutlined,
  ExperimentTwoTone
} from '@ant-design/icons'
import { markAsRead } from '../../flex/actions'
import history from '../../utils/history'
import NotificationMenu from '../../components/NotificationMenu'
import SearchBarContainer from '../SearchBar'
import './style.scss'

function HeaderContainer(props) {
  const pathname = useLocation().pathname
  const dispatch = useDispatch()
  const { userHandle, notifications, profilePicture } = props
  let readNotifications = []

  const handleSubMenuClick = path => {
    history.push(path)
  }

  const addToReadList = id => {
    readNotifications.push(id)
  }

  const goToNotification = notification => {
    if (!notification.read) {
      addToReadList(notification.id)
    }
    if (notification.type === 'follow') {
      return `/${notification.sender}`
    } else {
      return `/${notification.recipient}/${notification.recipeId}`
    }
  }

  const getNotificationText = notification => {
    switch (notification.type) {
      case 'like':
        return (
          <span className="notification-details">
            User {notification.sender} liked your recipe
          </span>
        )
      case 'comment':
        return (
          <span className="notification-details">
            User {notification.sender} commented on your recipe
          </span>
        )
      case 'follow':
        return (
          <span className="notification-details">
            User {notification.sender} started following you
          </span>
        )
      case 'bookmark':
        return (
          <span className="notification-details">
            User {notification.sender} saved your recipe
          </span>
        )
      default:
        break
    }
  }

  const onOpenChange = keys => {
    if (keys[0] === 'notification-submenu' && readNotifications.length > 0) {
      dispatch(markAsRead(readNotifications))
      readNotifications = []
    }
  }

  return (
    <div className="header-wrap">
      <Menu mode="horizontal" selectedKeys={[`${pathname}`]}>
        <Menu.Item key="/" className="list-item select">
          <Link to="/">
            <HomeTwoTone twoToneColor="#FFC742" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/saved" className="list-item select">
          <Link to="/saved">
            <SaveTwoTone twoToneColor="#97D191" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/explore" className="list-item select">
          <Link to="/explore">
            <ExperimentTwoTone twoToneColor="#91B7D1" />
          </Link>
        </Menu.Item>
      </Menu>
      <div className="search-wrap">
        <SearchBarContainer />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[`${pathname}`]}
        onOpenChange={onOpenChange}>
        <Menu.Item key="/add-new" className="list-item">
          <Link to="/add-new">
            <PlusOutlined style={{ color: '#97D191' }} />
          </Link>
        </Menu.Item>
        <NotificationMenu
          key="notification-submenu"
          goToNotification={goToNotification}
          getNotificationText={getNotificationText}
          notifications={notifications}
        />
        <Menu.SubMenu
          key="profile-submenu"
          className="list-item profile-avatar"
          onTitleClick={() => handleSubMenuClick(`/${userHandle}`)}
          icon={<Avatar src={profilePicture} />}>
          <Menu.Item key="menu:1">
            <Link to={`/${userHandle}`}>View profile</Link>
          </Menu.Item>
          <Menu.Item key="menu:2">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

HeaderContainer.propTypes = {
  notifications: PropTypes.array.isRequired,
  userHandle: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired
}

export default HeaderContainer
