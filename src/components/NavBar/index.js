import React from "react";
import localStore from "store";
import {
  Container,
  LogoContainer,
  JoesOddJobsLogo,
  AdminText,
  SignOutButton
} from "./styles";

const NavBar = () => {
  const isLoggedIn = localStore.get("admin");

  return (
    <Container>
      <LogoContainer>
        <JoesOddJobsLogo />
        <AdminText>Admin Portal</AdminText>
      </LogoContainer>
      {isLoggedIn && (
        <SignOutButton to="/" onClick={() => localStore.remove("admin")}>
          Sign Out
        </SignOutButton>
      )}
    </Container>
  );
};

export default NavBar;
