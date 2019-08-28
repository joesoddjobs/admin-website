import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import client from "./client";
import Home from "./containers/Home/";
import WrappedSignIn from "./containers/SignIn/";
import { Footer, NavBarSignedIn, NavBarSignedOut } from "./components";
import Dashboard from "./containers/Dashboard";

const isSignedIn = async () => {
  const token = await localStorage.getItem("token");
  return token !== null;
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
            {signedIn ? <NavBarSignedIn /> : <NavBarSignedOut />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={WrappedSignIn} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
