import { createSelector } from 'reselect'

export const getNotification = state => {
  return state.notification
}

export const getNotificationSuper = createSelector(
  [getNotification],
  notification => {
    return notification.allIds.map(id => notification.byId[id])
  }
)

export const getNotificationLoading = state => state.notification.loading

export const getNotificationNextLoading = state =>
  state.notification.loadingNext
