import config from '../../config.js'
import commonErrors from '../commonErrors.js'
import Cookies from 'cookies-js'
import * as userStoreActions from '../../redux/user/ac'

/**
 *
 * @param {object} [data={}]
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
export const getUserAPI = function(data = {}, options = {}, dispatch = undefined) {
  const token = Cookies.get('token')
  return fetch(config.apiUrl + '/users', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token,
    }),
  })
    .then(commonErrors(dispatch))
    .then(res => res.json())
    .then(response => response)
}

/**
 *
 * @param {object} [data={}]
 * @param {object} [options={}]
 * @returns {function(*, *)}
 */
export const getUserThunk = function(data, options) {
  return (dispatch, getState) => {
    return getUserAPI(data, options, dispatch)
      .then(body => {
        
        dispatch(userStoreActions.updateInformation(body))
        
        return body
      })
  }
}

export default getUserThunk
