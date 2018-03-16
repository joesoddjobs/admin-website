import config from '../../config.js'
import commonErrors from '../commonErrors.js'
import Cookies from 'cookies-js'

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
export const loginAPI = function(data, options = {}, dispatch = undefined) {
  return fetch(config.apiUrl + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(commonErrors(dispatch))
    .then(res => res.json())
    .then(response => response)
}

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @returns {function(*, *)}
 */
export const loginThunk = function(data, options) {
  return (dispatch, getState) => {
    return loginAPI(data, options, dispatch)
      .then(body => {
        Cookies
          .set('userID', body.userId)
          .set('token', body.token)
        
        return body
      })
  }
}

export default loginThunk
