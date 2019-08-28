import React from "react";
import WrappedSignIn from "../SignIn";
import Background from "../../components/Background";

const Home = ({ history }) => (
  <Background>
    <WrappedSignIn history={history} />
  </Background>
);

export default Home;
