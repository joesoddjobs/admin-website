import { actions } from './ac'

const reducer = (state, action) => {
  if (!state) {
    return {
      available: false,
      loading: false,
      data: null,
    }
  }
  
  switch (action.type) {
    case actions.UPDATE_USER:
      return {
        ...state,
        available: true,
        data: action.payload,
      }
    default:
      return state
  }
}

export default reducer
