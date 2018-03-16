import config from '../../config.js'
import commonErrors from '../commonErrors.js'

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
export const resetPasswordAPI = function(data, options = {}, dispatch = undefined) {
  return fetch(`${config.apiUrl}/auth/resetPassword`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(commonErrors(dispatch))
    .then(response => response)
}

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @returns {function(*, *)}
 */
export const resetPasswordThunk = function(data, options) {
  return (dispatch, getState) => {
    return resetPasswordAPI(data, options, dispatch)
      .then(body => {
        return body
      })
  }
}

export default resetPasswordThunk