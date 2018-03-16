import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Cookies from 'cookies-js'
import './MainNavigation1.css'
import MediaQuery from 'react-responsive'

const mapStateToProps = state => ({
  user: state.user.data,
})

class MainNavigation1 extends Component {
  state = {
    isLoggedIn: false,
  }

  login = () => {
    //todo
    return
  }

  register = () => {
    //todo
    return
  }

  userAction = () => {
    //todo
    return
  }

  componentDidMount() {
    if (this.props.user && this.props.user._id) {
      this.setState({isLoggedIn: true})
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user._id) {
      this.setState({isLoggedIn: true})

    } else {
      this.setState({isLoggedIn: false})
    }
  }

  render() {
    const $login =
      <div key={'login'} className="nav-item" onClick={this.login}>
        <span className="text">Login</span>
      </div>
    const $register =
      <div key={'register'} className="nav-item register">
        <div className="btn btn-primary" onClick={this.register}>
          <span>Register</span>
        </div>
      </div>
    const $signIn = [$login, $register]
    const $user =
      <div className="nav-item nav-user" onClick={this.userAction}>
        <span>
          <i className="icon-user" aria-hidden="true"/>

        </span>
        <span className="icon-username">
            {this.props.user &&
              this.props.user.name}
        </span>
      </div>
    const $userMobile =
      <div className="nav-item nav-user" onClick={this.userAction}>
        <span>
          <i className="icon-user" aria-hidden="true"/>
        </span>
      </div>
    const $session = this.state.isLoggedIn ? $user : $signIn
    const $sessionMobile = this.state.isLoggedIn ? $userMobile : $signIn

    return(
      <div>
        <MediaQuery query="(max-device-width: 705px)">
          <div className="main-navigation-mobile">
            <div className="nav-left">
              <div className="logo" onClick={() => {this.props.history.push('/home')}}>
                <span>logo standin</span>
              </div>
            </div>
            <div className="nav-right">
              {$sessionMobile}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 705px)">
          <div className="main-navigation-1">
            <div className="nav-left">
              <div className="logo" onClick={() => {this.props.history.push('/home')}}>
                <span>logo standin</span>
              </div>
            </div>
            <div className="nav-right">
              {$session}
            </div>
          </div>
        </MediaQuery>
      </div>)
  }
}

export default withRouter(connect(mapStateToProps)(MainNavigation1))
