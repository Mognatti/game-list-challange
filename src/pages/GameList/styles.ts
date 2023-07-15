import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { breakPoints, pallete } from "../../styles/styleVariables";

export const GameListContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 100%;
  padding: 0;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export const NameAndRatingFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`;

export const TextBox = styled.div<{ focused: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 400px;
  border-bottom: 1px solid ${pallete.yellow};
  transition: transform 0.3s;
  transform: ${(props) => (props.focused === "true" ? "scale(1.03)" : "none")};
  @media (max-width: ${breakPoints.smallest}) {
    width: 60%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  caret-color: ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  font-size: 16px;
  transition: 350ms;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(BsSearch)``;
