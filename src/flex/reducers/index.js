import { combineReducers } from 'redux'

import bookmark from './bookmark'
import explore from './explore'
import notification from './notification'
import timeline from './timeline'
import session from './session'

export default combineReducers({
  bookmark,
  explore,
  notification,
  timeline,
  session
})
