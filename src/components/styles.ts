import styled from "styled-components";
import { pallete } from "../styles/StyledComponents";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ProfileImg = styled.img<{ logged: string }>`
  width: ${(props) => (props.logged == "true" ? "20%" : "10%")};
  margin-right: 8px;
  cursor: pointer;
  z-index: 10;
  padding: 8px;
`;

export const LoginMenuContainer = styled.div<{ display: boolean }>`
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
  height: ${(props) => (props.display ? "auto" : "0")};
  opacity: ${(props) => (props.display ? "1" : "0")};
  overflow: hidden;
  transition: height 350ms, opacity 350ms;
  position: absolute;
  background-color: ${pallete.darkGray};
  padding: 16px;
  width: 10%;
  border-radius: 8px;
  top: 5px;
  right: 5px;
  border-bottom: 1px solid ${pallete.yellow};
  border-right: 1px solid ${pallete.yellow};
`;

export const LoginMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  width: 55%;
  margin-top: 16px;
  &:hover {
    color: ${pallete.fontColorBlack};
  }
`;

export const LoginButton = styled.button`
  display: flex;
  width: 100%;
  padding: 8px;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  outline: 1px solid ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  width: 55%;
  padding: 8px;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  outline: 1px solid ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  border: none;
  border-radius: 5px;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
