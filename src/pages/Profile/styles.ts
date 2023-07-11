import styled from "styled-components";
import { pallete, typografy } from "../../styles/styleVariables";

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
  border-bottom: 1px solid ${pallete.yellow};
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

export const ListSectionTitle = styled.div`
  padding: 16px;
  font-size: ${typografy.fontSize.title};
  text-align: center;
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
`;
