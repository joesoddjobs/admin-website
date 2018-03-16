import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home/Home'
import Logout from '../pages/signup-login/Logout'
import { connect } from 'react-redux'
import Cookies from 'cookies-js'
import MainNavigation1 from '../navigation/MainNavigation1'
import NotificationList from '../components/NotificationList'

class PrivateRoute extends Component {
  render() {
    const {
      loggedIn,
      component: Component,
      ...rest
    } = this.props
    
    return (
      <Route {...rest} render={props => loggedIn ?
        <Component {...props}/> :
        <Redirect to={{
          pathname: '/logout',
          state: {from: props.location},
        }}/>
      }/>
    )
  }
}

PrivateRoute = connect(
  () => {
    return {
      loggedIn: Boolean(Cookies.get('userID')),
    }
  }
)(PrivateRoute)

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigation1/>
        <Switch>
          <Route exact
                 path="/"
                 component={Home}/>
          <Route path="/logout"
                 component={Logout}/>
          <Route path="/home"
                 component={Home}/>
        </Switch>
        <NotificationList />
      </div>
    )
  }
}

export default App
