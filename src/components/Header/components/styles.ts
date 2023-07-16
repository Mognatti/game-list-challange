import styled, { css, keyframes } from "styled-components";
import { breakPoints, pallete } from "../../../styles/styleVariables";
import { Link } from "react-router-dom";
import { BsArrowUpCircle } from "react-icons/bs";

const imageShakeAnimation = keyframes`
0% {
  transform: scale(1.08);
  box-shadow: 0 0 15px 5px ${pallete.yellow};
  border-radius: 50%;

}

20%{
  transform: scale(1);

}

40%{
  transform: scale(1.08);
  box-shadow: 0 0 15px 5px ${pallete.yellow};
  border-radius: 50%;
}


60%{
  transform: scale(1);

}

80%{
  transform: scale(1.08);
  box-shadow: 0 0 15px 5px ${pallete.yellow};
  border-radius: 50%;
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
  position: fixed;
  right: 3%;
  top: 90%;
  color: ${pallete.yellow};
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

export const ProfileImg = styled.img<{
  logged: string;
  modaldisplay: string;
  user: string;
}>`
  position: relative;
  width: 25%;
  right: ${(props) => (props.modaldisplay === "true" ? "37%" : "10%")};
  top: ${(props) => (props.modaldisplay === "true" ? "10px" : "0")};
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: 350ms;
  ${imageShake}
  @media (max-width: ${breakPoints.bigger}) {
    right: ${(props) => (props.modaldisplay === "true" ? "30%" : "10%")};
  }
  @media (max-width: ${breakPoints.big}) {
    right: ${(props) => (props.modaldisplay === "true" ? "28%" : "10%")};
    top: ${(props) => (props.modaldisplay === "true" ? "10px" : "1vh")};
    margin-bottom: 2vh;
  }
  @media (max-width: ${breakPoints.mid}) {
    right: ${(props) => (props.modaldisplay === "true" ? "36%" : "10%")};
    width: 28%;
  }
  @media (max-width: ${breakPoints.small}) {
    top: ${(props) => (props.modaldisplay === "true" ? "10px" : "1vh")};
    right: ${(props) => (props.modaldisplay === "true" ? "38%" : "10%")};
    width: 30%;
  }
  @media (max-width: ${breakPoints.smaller}) {
    right: ${(props) => (props.modaldisplay === "true" ? "42%" : "10%")};
  }
  @media (max-width: ${breakPoints.smallest}) {
    right: ${(props) => (props.modaldisplay === "true" ? "45%" : "10%")};
  }
  @media (max-width: 415px) {
    right: ${(props) => (props.modaldisplay === "true" ? "45%" : "10%")};
    width: 35%;
  }
  @media (max-width: 376px) {
    right: ${(props) => (props.modaldisplay === "true" ? "48%" : "10%")};
    top: ${(props) => (props.modaldisplay === "true" ? "2.5vh" : "1vh")};
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-top: -2vh;
  padding-bottom: 8px;
  border-bottom: 1px solid ${pallete.yellow};
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
  @media (max-width: ${breakPoints.mid}) {
    width: 200px;
  }
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
