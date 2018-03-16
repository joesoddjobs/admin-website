export const actions = {
  USER_LOGOUT: 'USER_LOGOUT',
}

/**
 *
 * @returns {object}
 */
export function userLogout() {
  return {
    type: actions.USER_LOGOUT,
    payload: void 0,
  }
}
