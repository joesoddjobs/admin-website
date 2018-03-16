import { combineReducers } from 'redux'
import userReducer from './user/reducer'
import notificationsReducer from './notifications/reducer'
import { actions } from './ac'
import { resetStateID } from './persist'

const appReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
})

const rootReducer = (state, action) => {
  if (action.type === actions.USER_LOGOUT) {
    resetStateID()
    state = void 0
  }
  
  return appReducer(state, action)
}

export default rootReducer
