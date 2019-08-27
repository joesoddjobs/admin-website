import styled from "styled-components";
import { Flex } from "@rebass/grid";
import logo from "../../assets/images/JoesOddJobsLogo.png";

export const Container = styled(Flex)`
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
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
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 10px;
`;
