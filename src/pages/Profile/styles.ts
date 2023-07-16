import styled from "styled-components";
import { pallete, typografy } from "../../styles/styleVariables";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh 5% 0px 5%;
  width: 90%;
`;

export const ProfileHeader = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 10%;
  padding: 8px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLinkToHome = styled(Link)`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  margin-top: 1vh;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    color: ${pallete.fontColorBlack};
  }
`;

export const ProfileButtonToHome = styled.button`
  display: flex;
  width: 100%;
  padding: 8px;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  outline: 1px solid ${pallete.yellow};
  color: ${pallete.fontColorWhite};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    color: ${pallete.fontColorBlack};
    background-color: ${pallete.yellow};
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ListSectionTitle = styled.div`
  padding: 16px;
  font-size: ${typografy.fontSize.title};
  text-align: center;
  margin-top: 1vh;
  border-bottom: 1px solid ${pallete.yellow};
  width: 30%;
`;

export const FavortiesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  padding: 0;
  gap: 16px;
  margin: 0;
  margin-bottom: 2%;
  @media (max-width: 1466px) {
    justify-content: center;
  }
`;

export const PerfilLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  width: 100%;
`;
export const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 15vh;
`;

export const GuestTitle = styled.p`
  text-align: center;
  font-size: ${typografy.fontSize.title};
`;

export const GuestButtonList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 5vh;
`;

export const GuestLink = styled(Link)`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  outline: 2px solid ${pallete.yellow};
  border-radius: 15px;
  transition: 350ms;
`;

export const GuestButton = styled.button`
  color: ${pallete.fontColorWhite};
  transition: 350ms;

  border: none;
  background-color: transparent;
  border-radius: 15px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: ${typografy.fontSize.regular};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
