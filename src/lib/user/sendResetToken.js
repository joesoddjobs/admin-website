import config from '../../config.js'
import commonErrors from '../commonErrors.js'

/**
 *
 * @param {object} data
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
export const sendResetTokenAPI = function(data, options = {}, dispatch = undefined) {
  return fetch(`${config.apiUrl}/auth/sendResetToken`, {
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
export const sendResetTokenThunk = function(data, options) {
  return (dispatch, getState) => {
    return sendResetTokenAPI(data, options, dispatch)
      .then(body => {
        return body
      })
  }
}

export default sendResetTokenThunk
