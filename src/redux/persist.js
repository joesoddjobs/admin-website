import uuid from 'uuid/v4'

export const LOCAL_STORAGE_STATE = 'reduxState'
export const LOCAL_STORAGE_STATE_KEY = 'reduxStateKey'

let STATE_ID

export const resetStateID = () => {
  try {
    STATE_ID = uuid()
    localStorage.setItem(LOCAL_STORAGE_STATE_KEY, STATE_ID)
    return true
  } catch (e) {
    console.error(e)
    return void 0
  }
}

export const loadState = () => {
  try {
    // get the state key or create a new one
    STATE_ID = localStorage.getItem(LOCAL_STORAGE_STATE_KEY)
    
    if (!STATE_ID) {
      STATE_ID = uuid()
      localStorage.setItem(LOCAL_STORAGE_STATE_KEY, STATE_ID)
    }
    
    const serializedState = localStorage.getItem(LOCAL_STORAGE_STATE)
    if (!serializedState) {
      return void 0
    }
    
    return JSON.parse(serializedState)
  } catch (e) {
    console.error(e)
    return void 0
  }
}

export const saveState = (state) => {
  try {
    // only proceed to save if STATE_ID in localstorage is the same as the one
    // in memory
    const localStorageStateID = localStorage.getItem(LOCAL_STORAGE_STATE_KEY)
    
    if (localStorageStateID !== STATE_ID) {
      // don't flush current in memory state to localstorage
      return true
    }
    
    const serializedState = JSON.stringify(state)
    localStorage.setItem(LOCAL_STORAGE_STATE, serializedState)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}
