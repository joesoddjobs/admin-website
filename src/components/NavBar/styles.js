import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/JoesOddJobsLogo.png";

const standardMargin = "10px";

export const Container = styled(Flex)`
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Flex)`
  flex-direction: row;
`;

export const JoesOddJobsLogo = styled.img.attrs({
  src: logo
})`
  width: 234px;
  height: 43px;
  margin-left: 5px;
`;

export const AdminText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 25px;
  align-self: flex-end;
  margin-bottom: 10px;
  height: 25px;
`;

export const SignOutButton = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-left: ${standardMargin};
  margin-right: ${standardMargin};
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.font.primary};
  padding: 8px 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
    font-weight: 700;
    border-width: 2px;
  }
`;
