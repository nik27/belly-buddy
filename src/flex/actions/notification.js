import * as t from '../types/notifications'
import {
  fetchNotificationInitial,
  fetchNotificationNext,
  postMarkAsRead
} from '../../api/notification'

export const getNotification = () => dispatch => {
  dispatch({
    type: t.FETCH_NOTIFICATION_REQUEST
  })

  return fetchNotificationInitial()
    .then(({ data }) => {
      dispatch({
        type: t.FETCH_NOTIFICATION_SUCCESS,
        payload: {
          objectsArray: data.reduce((dataObject, item) => {
            dataObject[item.id] = item
            return dataObject
          }, {}),
          idArray: data.map(item => item.id.toString())
        }
      })
    })
    .catch(res => {
      dispatch({
        type: t.FETCH_NOTIFICATION_FAILURE,
        payload: res.message
      })
    })
}

export const getNotificationNext = lastTimestamp => dispatch => {
  dispatch({
    type: t.FETCH_NOTIFICATION_NEXT_REQUEST
  })

  return fetchNotificationNext(lastTimestamp)
    .then(({ data }) => {
      dispatch({
        type: t.FETCH_NOTIFICATION_NEXT_SUCCESS,
        payload: {
          objectsArray: data.reduce((dataObject, item) => {
            dataObject[item.id] = item
            return dataObject
          }, {}),
          idArray: data.map(item => item.id.toString())
        }
      })
    })
    .catch(res => {
      dispatch({
        type: t.FETCH_NOTIFICATION_NEXT_FAILURE,
        payload: res.message
      })
    })
}

export const markAsRead = readNotifications => (dispatch, getState) => {
  const notifications = getState().notification.byId

  const unreadNotifications = Object.fromEntries(
    Object.entries(notifications)
      .filter(([key, value]) => readNotifications.includes(key))
      .map(([key, value]) => [key, { ...value, read: true }])
  )

  return postMarkAsRead(readNotifications).then(res =>
    dispatch({
      type: t.MARK_AS_READ,
      payload: unreadNotifications
    })
  )
}
