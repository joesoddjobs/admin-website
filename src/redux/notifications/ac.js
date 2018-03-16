import uuid from 'uuid/v4'

export const actions = {
  ADD_NOTIFICATION: 'notifications/ADD',
  REMOVE_NOTIFICATION: 'notifications/REMOVE',
}

/**
 *
 * @param {object} notification
 * @param {string} notification.message
 * @param {string} notification.type
 * @returns {object}
 */
export function validateNotification(notification) {
  if (!notification) {
    throw new Error('no notification passed')
  }
  
  if (!notification.message) {
    throw new Error('no message in notification')
  }
  
  if (!['success', 'warning', 'error'].includes(notification.type)) {
    throw new Error('incorrect or no type in notification')
  }
}

/**
 *
 * @param {object} notification
 * @param {string} notification.message
 * @param {string} notification.type
 * @returns {object}
 */
export function addNotification(notification) {
  validateNotification(notification)
  return {
    type: actions.ADD_NOTIFICATION,
    payload: {
      // add unique id for use during removal
      id: uuid(),
      type: notification.type,
      message: notification.message,
    },
  }
}

/**
 *
 * @param {string} id
 * @returns {object}
 */
export function removeNotification(id) {
  if (!id) {
    throw new Error('id not passed in')
  }
  return {
    type: actions.REMOVE_NOTIFICATION,
    payload: id,
  }
}
