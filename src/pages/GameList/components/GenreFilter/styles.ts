import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { breakPoints, pallete } from "../../../../styles/styleVariables";
import { BsFilter } from "react-icons/bs";

export const GenreList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  gap: 8px;
`;
export const GenreListButton = styled.button<{ clicked?: string }>`
  background-color: ${(props) =>
    props.clicked === "true" ? `${pallete.yellow}` : `${pallete.darkGray}`};
  color: ${(props) =>
    props.clicked === "true"
      ? `${pallete.backgroundColorDark}`
      : `${pallete.fontColorWhite}`};
  border: none;
  border-radius: 15px;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  &:hover {
    outline: 1px solid ${pallete.yellow};
  }
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 400px;
  border-bottom: 1px solid ${pallete.yellow};
  @media (max-width: ${breakPoints.smallest}) {
    width: 60%;
  }
`;
export const GenreSelectFilter = styled.select`
  margin-top: 16px;
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${pallete.fontColorWhite};
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  &:focus > option {
    background-color: ${pallete.backgroundColorDark};
    color: ${pallete.fontColorWhite};
  }
  &:focus > option:checked {
    color: ${pallete.yellow};
  }
`;
export const GenreFilterIcon = styled(BsFilter)``;

export const FavFilter = styled(AiFillHeart)`
  color: red;
  cursor: pointer;
`;
