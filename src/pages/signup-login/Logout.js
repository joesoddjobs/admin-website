import React, { Component } from 'react'
import { userLogout } from '../../redux/ac'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Cookies from 'cookies-js'

/* Logging out from redux involves clearing out the store items. Such clearing
 might cause flicker on the active view as react responds to the store. To
 prevent that, any logout action should redirect the user to this view which will
 remain static as everything is cleared out and then redirect to home.
 */

class Logout extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  
  componentDidMount() {
    const {userLogout, history} = this.props
    userLogout()
    Cookies
      .expire('userID')
      .expire('token')
    history.push('/')
  }
  
  render() {
    return (
      <div>
        <p>Logging you out...</p>
      </div>
    )
  }
}

Logout = withRouter(connect(
  null,
  (dispatch) => {
    return bindActionCreators({userLogout}, dispatch)
  }
)(Logout))

export default Logout
