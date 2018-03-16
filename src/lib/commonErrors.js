import errors from './errors.js'
import { addNotification } from '../redux/notifications/ac'

export default function(dispatch) {
  if (dispatch === undefined) {
    console.warn('dispatch is not passed in to an API call')
    return (res) => {return res}
  }
  return async(res) => {
    if (res.status === 400) {
      await res.json().then(resp => {
        if (resp.code === errors.MALFORMED_BODY) {
          const fields = resp.context.fields.join(', ')
          dispatch(addNotification({
            type: 'error',
            message: 'The following fields can not be empty: ' + fields + '.',
          }))
        } else if (resp.code === errors.NOT_AUTHORIZED) {
          dispatch(addNotification({
            type: 'error',
            message: 'You are not authorized to perform this action.',
          }))
        } else if (resp.code === errors.SERVER_ERROR) {
          dispatch(addNotification({
            type: 'error',
            message: 'There seems to be a problem with our server. Please try again later.',
          }))
        } else {
          dispatch(addNotification({
            type: 'error',
            message: resp.msg,
          }))
        }
      })
      return Promise.reject('API error')
    } else {
      return res
    }
  }
}
