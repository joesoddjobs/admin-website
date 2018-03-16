import { actions } from './ac'

const reducer = (state, action) => {
  if (!state) {
    state = {
      data: [],
    }
  }
  
  switch (action.type) {
    case actions.ADD_NOTIFICATION: {
      const newData = state.data.slice()
      // the data will be displayed with the recent notification at the bottom
      // the react component will be looping and hence the last notification in
      // the list will be at the bottom
      // so we push the recent notification to the end
      newData.push(action.payload)
      
      return {
        ...state,
        data: newData,
      }
    }
    case actions.REMOVE_NOTIFICATION: {
      // action.payload is the id of the notification
      const notificationIndex = state.data.findIndex(notif => notif.id === action.payload)
      if (notificationIndex === -1) {
        return state
      }
      const newData = state.data.slice()
      newData.splice(notificationIndex, 1)
      return {
        ...state,
        data: newData,
      }
    }
    default:
      return state
  }
}

export default reducer