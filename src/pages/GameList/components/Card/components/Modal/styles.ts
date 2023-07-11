import styled from "styled-components";
import { pallete } from "../../../../../../styles/styleVariables";
import { Link } from "react-router-dom";

export const Background = styled.div<{ showModal: boolean }>`
  display: block;
  position: fixed;
  left: ${(props) => (props.showModal ? 0 : "1000%")};
  top: ${(props) => (props.showModal ? 0 : "1000%")};
  right: ${(props) => (props.showModal ? 0 : "1000%")};
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 350ms;
`;

export const ModalContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  left: 35%;
  top: 20%;
  width: 500px;
  height: 300px;
  background-color: ${pallete.darkGray};
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
