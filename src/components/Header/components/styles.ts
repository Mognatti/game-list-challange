import styled, { css, keyframes } from "styled-components";
import { pallete } from "../../../styles/styleVariables";
import { Link } from "react-router-dom";
import { BsArrowUpCircle } from "react-icons/bs";

const imageShakeAnimation = keyframes`
0% {
  transform: scale(1.08);
}

20%{
  transform: scale(1);

}

40%{
  transform: scale(1.08);
}


60%{
  transform: scale(1);

}

80%{
  transform: scale(1.08);
}

100%{
  transform: none;

}
`;
const imageShake = css`
  animation: ${imageShakeAnimation} 500ms linear;
`;

const showLinkAnimation = keyframes`
0%{
opacity: 0;
}
100%{
opacity: 1;
}
`;
const showLink = css`
  animation: ${showLinkAnimation} 700ms linear;
`;

export const ArrowUpIcon = styled(BsArrowUpCircle)`
  cursor: pointer;
  &:hover {
    transition: 350ms;
    opacity: 0.5;
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ProfileImg = styled.img<{ logged: string; modaldisplay: string }>`
  position: relative;
  width: ${(props) => (props.logged == "true" ? "25%" : "12%")};
  right: ${(props) => (props.modaldisplay === "true" ? "90px" : "8px")};
  top: ${(props) => (props.modaldisplay === "true" ? "10px" : "0")};
  border-bottom: ${(props) =>
    props.modaldisplay === "true" ? `1px solid ${pallete.yellow}` : "none"};
  cursor: pointer;
  z-index: 10;
  padding: 8px;
  transition: 350ms;
  ${imageShake}
`;

export const LoginMenuContainer = styled.div<{ display: string }>`
  visibility: ${(props) => (props.display === "true" ? "visible" : "hidden")};
  box-shadow: 0 0 5px ${pallete.yellow};
  width: 15%;
  height: ${(props) => (props.display === "true" ? "auto" : "0")};
  opacity: ${(props) => (props.display === "true" ? "1" : "0")};
  overflow: hidden;
  transition: 350ms;
  position: absolute;
  background-color: ${pallete.darkGray};
  padding: 24px 8px;
  border-radius: 8px;
  top: 5px;
  right: 5px;
`;

export const LoginMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30%;
`;
export const LinkButton = styled(Link)<{ display: string }>`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  width: 55%;
  margin-top: 16px;
  opacity: ${(props) => (props.display === "true" ? 1 : 0)};
  ${(props) =>
    props.display === "true"
      ? css`
          ${showLink}
        `
      : ""};
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

export const LogoutButton = styled.button<{ display: string }>`
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
  ${(props) =>
    props.display === "true"
      ? css`
          ${showLink}
        `
      : ""};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;

export const FirebaseLoaderContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin-right: 40px;
`;
