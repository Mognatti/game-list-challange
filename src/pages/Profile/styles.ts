import styled from "styled-components";
import { pallete } from "../../styles/StyledComponents";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const NavigateListButton = styled.button`
  background-color: transparent;
  outline: 1px solid ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
