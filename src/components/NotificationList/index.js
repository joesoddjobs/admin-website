import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notification from '../Notification'
import './NotificationList.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class NotificationList extends Component {
  render() {
    const $notifications = this.props.notifications.map((notification) => {
      return (
        <Notification key={notification.id} id={notification.id} message={notification.message} type={notification.type}/>
      )
    })
    
    return (
      <div className='NotificationList'>
        <ReactCSSTransitionGroup
          transitionName="notificationItem"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={3000}>
          {$notifications}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

NotificationList = connect(
  (state) => {
    return {
      notifications: state.notifications.data,
    }
  }
)(NotificationList)

export default NotificationList
