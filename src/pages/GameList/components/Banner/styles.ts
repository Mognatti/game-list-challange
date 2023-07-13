import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../../../styles/styleVariables";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 2vh 0 -2% 13%;
`;
export const WelcomeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 4em;
`;
export const UserEmail = styled.p`
  margin: 0;
  font-size: 2rem;
  &::after {
    content: "!";
  }
`;
export const NotEmail = styled.p`
  font-size: 2rem;
  margin-top: 0;
`;
export const LoginLink = styled(Link)`
  color: ${pallete.fontColorWhite};
  text-decoration: none;
  border-bottom: 1px solid ${pallete.yellow};
  transition: 350ms;
  &:hover {
    padding: 8px 8px 0 8px;
    opacity: 0.7;
  }
  &:active {
    transition: 10ms;
    color: ${pallete.yellow};
  }
`;

export const BannerInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-right: 25%;
  gap: 3rem;
  padding-bottom: 16px;
`;
export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const UserContentTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid ${pallete.yellow};
`;
export const HiddenContent = styled.span`
  text-align: justify;
  padding: 0 16px;
`;
