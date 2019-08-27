import React from "react";
import { Container, JoesOddJobsLogo, AdminText } from "./styles";

const NavBarSignedOut = () => {
  return (
    <Container>
      <JoesOddJobsLogo />
      <AdminText>Admin Portal</AdminText>
    </Container>
  );
};

export default NavBarSignedOut;
