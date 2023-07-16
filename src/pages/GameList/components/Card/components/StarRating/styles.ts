import { styled } from "styled-components";
import { BsStarFill } from "react-icons/bs";
import { pallete } from "../../../../../../styles/styleVariables";

export const FilledStarIcon = styled(BsStarFill)`
  color: ${pallete.yellow};
  padding: 2px;
  cursor: pointer;
`;

export const OutlinedStarIcon = styled(BsStarFill)`
  fill: ${(props) => (props.hovered === "true" ? `${pallete.yellow}` : "none")};
  stroke: ${pallete.yellow};
  stroke-width: 1px;
  transition: 350ms;
  padding: 2px;
  cursor: pointer;
`;

export const StarContainer = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;
