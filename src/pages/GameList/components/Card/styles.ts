import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsInfoLg } from "react-icons/bs";
import { pallete, breakPoints } from "../../../../styles/StyledComponents";

export const CardContainer = styled.div`
  background-color: ${pallete.darkGray};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 8px 0;
  align-items: center;
  width: 30%;
  @media (max-width: ${breakPoints.bigger}) {
    width: 40%;
  }
  @media (max-width: ${breakPoints.midSmall}) {
    width: 55%;
  }
  @media (max-width: ${breakPoints.small}) {
    width: 80%;
  }
`;
export const CardThumb = styled.img`
  border-radius: 15px;
  @media (max-width: ${breakPoints.mid}) {
    width: 80%;
  }
`;
export const CardTitle = styled.h3`
  color: ${pallete.fontColorWhite};
  border-bottom: 1px solid ${pallete.yellow};
`;
export const CardGameInfoContainer = styled.div`
  width: 100%;
`;
export const CardGameInfo = styled.p`
  color: ${pallete.fontColorWhite};
  margin: 8px 24px;
`;
export const CardGameLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 0;
  margin: 16px 0 0 0;
  width: 100%;
`;
export const CardGameLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  width: 30%;
  border-radius: 15px;
`;
export const CardGameLinkLabel = styled.label`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  margin-bottom: 8px;
`;
export const CardGameMoreInfoIcon = styled(BsInfoLg)`
  color: ${pallete.fontColorWhite};
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  border: 2px solid ${pallete.yellow};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
export const CardGameStoreIcon = styled(FiShoppingCart)`
  color: ${pallete.fontColorWhite};
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  border: 2px solid ${pallete.yellow};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
export const OutlineHeartIcon = styled(AiOutlineHeart)`
  border-radius: 50%;
  padding: 8px;
  color: ${pallete.yellow};
  cursor: pointer;
  &:hover {
    outline: 2px solid ${pallete.yellow};
    color: ${pallete.yellow};
  }
`;

export const FilledHeartIcon = styled(AiFillHeart)`
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  color: red;
  cursor: pointer;
  &:hover {
    outline: 2px solid red;
  }
`;
