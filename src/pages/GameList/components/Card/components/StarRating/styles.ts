import { styled } from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { pallete } from "../../../../../../styles/styleVariables";

export const FilledStarIcon = styled(BsStarFill)`
  color: ${pallete.yellow};
  padding: 2px;
`;

export const HalfStarIcon = styled(BsStarHalf)`
  color: ${pallete.yellow};
  padding: 2px;
`;

export const OutlinedStarIcon = styled(BsStar)`
  color: ${pallete.yellow};
  padding: 2px;
`;

export const StarContainer = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;
