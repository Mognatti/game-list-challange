import { styled } from "styled-components";
import { breakPoints, pallete } from "../../styles/styleVariables";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${pallete.backgroundColorLight};
  color: ${pallete.fontColorBlack};
  height: 8vh;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 100;
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: ${breakPoints.smallest}) {
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;
export const HeaderTitle = styled.span`
  font-size: 1em;
  font-weight: 400;
  text-align: center;
`;
export const HeaderListItem = styled.li`
  margin-left: 16px;
  &:nth-of-type(1) {
    @media (max-width: ${breakPoints.smallest}) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }
  &:nth-of-type(2) {
    display: flex;
  }
`;
