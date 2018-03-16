import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Notification.css'
import { removeNotification } from '../../redux/notifications/ac'
import { connect } from 'react-redux'

class Notification extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  }
  
  state = {
    timeOut: null,
  }
  
  componentDidMount() {
    const timeOut = setTimeout(() => {
      this.props.dispatch(removeNotification(this.props.id))
    }, 10000)
    this.setState({
      timeOut,
    })
  }
  
  handleClick = () => {
    this.props.dispatch(removeNotification(this.props.id))
  }
  
  componentWillUnmount = () => {
    clearTimeout(this.state.timeOut)
  }
  
  render() {
    return (
      <div className='Notification '>
        <div className={'rectangle ' + this.props.type}>
          <span className='close-button'><i className="icon-x" onClick={this.handleClick} aria-hidden="true"/></span>
          <div className='rectangle-text'>{this.props.message}</div>
        </div>
      </div>
    )
  }
}

Notification = connect(null)(Notification)
export default Notification
