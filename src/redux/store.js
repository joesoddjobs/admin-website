import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'
import { createLogger } from 'redux-logger'
import { saveState, loadState } from './persist'
import throttle from 'lodash.throttle'
import thunk from 'redux-thunk'

const logger = createLogger({
  collapsed: true,
})

// we also load in any persisted state that was saved to localStorage
const persisted_state = loadState()

const store = createStore(
  rootReducer,
  persisted_state,
  applyMiddleware(thunk, logger)
)

// to be able to recover from reloads, we subscribe to store changes
// and save state at regular intervals (sometimes the state changes very fast
// so its better to throttle for performance intervals)
store.subscribe(throttle(() => {
  const {
    user,
    seller_profile,
  } = store.getState()
  
  // we only persist the parts of the state that matter
  saveState({
    user,
    seller_profile,
  })
}, 1000))

export default store
