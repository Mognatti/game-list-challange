import styled from "styled-components";
import { pallete } from "../../../../styles/styleVariables";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const MiniCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 12px 5px ${pallete.darkGray};
    transition: 350ms;
  }
`;

export const MiniCardImg = styled.img`
  padding: 16px;
`;

export const MiniCardTitleDiv = styled.div<{ hover: boolean }>`
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: 350ms;
`;

export const MiniCardTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

export const FavIcon = styled(AiFillHeart)`
  color: red;
  cursor: pointer;
  padding: 8px;
`;

export const NotFavIcon = styled(AiOutlineHeart)`
  color: red;
  cursor: pointer;
  padding: 8px;
`;
