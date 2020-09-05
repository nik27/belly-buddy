import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Button, Empty, List, Skeleton, Typography } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import {
  getNotification,
  getNotificationNext,
  markAsRead
} from '../../redux/actions'
import {
  getNotificationSuper,
  getNotificationLoading,
  getNotificationNextLoading
} from '../../redux/selectors'
import NotificationListItem from '../../components/NotificationListItem'
import './style.scss'

function NotificationPage() {
  const dispatch = useDispatch()
  const initialNotifications = useSelector(state => getNotificationSuper(state))
  const isLoading = useSelector(state => getNotificationLoading(state))
  const isNextLoading = useSelector(state => getNotificationNextLoading(state))
  const skeletonArray = []
  const [readNotifications, setReadNotifications] = useState([])

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      skeletonArray.push(i)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(getNotification())

    return function cleanup() {
      dispatch(markAsRead(readNotifications))
    }
  }, [dispatch, readNotifications])

  const loadMore = () => {
    const lastTimestamp = initialNotifications.slice(-1).pop().createdAt

    dispatch(getNotificationNext(lastTimestamp))
  }

  const markNotification = notification => {
    if (!notification.read) {
      setReadNotifications([notification.id, ...readNotifications])
    }
  }

  const goToNotification = notification => {
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
            User{' '}
            <Link to={`/${notification.sender}`}>{notification.sender}</Link>{' '}
            liked your <Link to={goToNotification(notification)}>recipe</Link>
          </span>
        )
      case 'comment':
        return (
          <span className="notification-details">
            User{' '}
            <Link to={`/${notification.sender}`}>{notification.sender}</Link>{' '}
            commented on your{' '}
            <Link to={goToNotification(notification)}>recipe</Link>
          </span>
        )
      case 'follow':
        return (
          <span className="notification-details">
            User{' '}
            <Link to={`/${notification.sender}`}>{notification.sender}</Link>{' '}
            started following{' '}
            <Link to={goToNotification(notification)}>you</Link>
          </span>
        )
      case 'bookmark':
        return (
          <span className="notification-details">
            User{' '}
            <Link to={`/${notification.sender}`}>{notification.sender}</Link>{' '}
            saved your recipe{' '}
            <Link to={goToNotification(notification)}>recipe</Link>
          </span>
        )
      default:
        break
    }
  }

  return (
    <div className="notification-page">
      {(isLoading && (
        <List
          header={<Typography.Title>Notifications</Typography.Title>}
          dataSource={skeletonArray}
          renderItem={item =>
            skeletonArray.map(el => (
              <Skeleton key={el} active avatar></Skeleton>
            ))
          }
        />
      )) ||
        (initialNotifications && initialNotifications.length > 0 && (
          <List
            header={<Typography.Title>Notifications</Typography.Title>}
            dataSource={initialNotifications}
            renderItem={item => (
              <NotificationListItem
                notification={item}
                markNotification={markNotification}
                getNotificationText={getNotificationText}
              />
            )}
          />
        )) || (
          <Empty className="empty" description={<span></span>}>
            <>
              <span>
                <Typography.Title level={3}>
                  You don&apos;t have any notifications
                </Typography.Title>
                <br />
                <Typography.Title level={4}>
                  Come back when the red dot next to the bell shows up{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    👉{' '}
                    <div className="notification">
                      <Badge count={1}>
                        <BellTwoTone twoToneColor="#91B7D1" />
                      </Badge>
                    </div>
                  </span>
                </Typography.Title>
              </span>
              <Link to="/">
                <Button type="primary" size="large">
                  Home
                </Button>
              </Link>
            </>
          </Empty>
        )}
      {isNextLoading && (
        <List
          header={<Typography.Title>Notifications</Typography.Title>}
          dataSource={skeletonArray}
          renderItem={item =>
            skeletonArray.map(el => (
              <Skeleton key={el} active avatar></Skeleton>
            ))
          }
        />
      )}
      {initialNotifications.length >= 10 && !isNextLoading && (
        <Button
          size="large"
          type="dashed"
          className="load-more-button"
          onClick={() => loadMore()}>
          View More
        </Button>
      )}
    </div>
  )
}

export default NotificationPage
