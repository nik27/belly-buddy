import axios from 'axios'

export const fetchNotificationInitial = () => axios.get('/notification')

export const fetchNotificationNext = lastTimestamp =>
  axios.get(`/notification/${lastTimestamp}`)

export const postMarkAsRead = notifications =>
  axios.post('/notification/mark', notifications)
