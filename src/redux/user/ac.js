export const actions = {
  UPDATE_USER: 'user/UPDATE',
}

/**
 *
 * @param {object} user
 * @returns {object}
 */
export function updateInformation(user) {
  if (!user) {
    throw new Error('no user information passed')
  }
  
  return {
    type: actions.UPDATE_USER,
    payload: user,
  }
}