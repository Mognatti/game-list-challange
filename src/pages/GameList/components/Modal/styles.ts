import styled from "styled-components";
import { breakPoints, pallete } from "../../../../styles/styleVariables";
import { Link } from "react-router-dom";

export const Background = styled.div<{ showmodal: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: ${(props) => (props.showmodal === "true" ? "-15%" : "150%")};
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 300ms;
  z-index: 200;
`;

export const ModalContainer = styled.div<{ showmodal: string }>`
  position: relative;
  flex-direction: column;
  display: flex;
  left: ${(props) => (props.showmodal === "true" ? "8%" : 0)};
  width: 500px;
  height: 300px;
  background-color: ${pallete.darkGray};
  transition: 500ms ease-in-out;
  border-radius: 10px;
  @media (max-width: ${breakPoints.small}) {
    width: 300px;
    height: 350px;
    justify-items: center;
    align-items: center;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 8px;
  font-size: 1.2em;
  padding: 16px 0;
  border-bottom: 1px solid ${pallete.yellow};
  text-align: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  font-size: 1.1em;
  margin-top: 16px;
`;

export const ModalActionsDiv = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  margin-top: 16px;
`;

export const ModalButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  padding: 8px;
  outline: 2px solid ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  cursor: pointer;
  font-size: 0.85em;
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;

export const ModalLink = styled(Link)`
  color: ${pallete.fontColorWhite};
  text-decoration: none;
`;
