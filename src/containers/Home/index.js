import React from "react";
import { Container } from "./styles";
import WrappedSignIn from "../SignIn";

const Home = ({ history }) => (
  <Container>
    <WrappedSignIn history={history} />
  </Container>
);

export default Home;
