import { styled } from "styled-components";
import { breakPoints, pallete } from "../../styles/styleVariables";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${pallete.backgroundColorDark};
  border-bottom: 1px solid ${pallete.darkYellow};
  color: ${pallete.fontColorWhite};
  height: 8vh;
  width: 100%;
  margin: 0;
  padding: 8px 0;
  z-index: 100;
  top: 0;
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: ${breakPoints.smallest}) {
  }
`;
export const HeaderTitle = styled.span`
  font-size: 1.2em;
  font-weight: 400;
  text-align: center;
  padding: 0 8px;
`;
export const HeaderListItem = styled.li`
  margin-left: 16px;
  &:nth-of-type(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  &:nth-of-type(2) {
    display: flex;
  }
`;
