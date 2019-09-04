import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { ThemeProvider } from "styled-components";
import localStore from "store";
import theme from "./theme";
import client from "./client";
import Home from "./containers/Home/";
import WrappedSignIn from "./containers/SignIn/";
import { Footer, NavBar } from "./components";
import Dashboard from "./containers/Dashboard";

const isSignedIn = async () => {
  const token = await localStore.get("admin");
  return token !== null;
};

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

class App extends Component {
  state = {
    signedIn: false
  };

  componentDidMount = () => {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, loading: false }))
      .catch(() => alert("An error occurred"));
  };

  render() {
    const { signedIn } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <AlertProvider template={AlertTemplate} {...options}>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={WrappedSignIn} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
              <Footer />
            </AlertProvider>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
