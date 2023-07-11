import styled from "styled-components";
import { breakPoints, pallete } from "../../styles/styleVariables";
import { AiOutlineReload } from "react-icons/ai";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5vh;
`;
export const ErrorMessage = styled.p`
  padding: 6px;
  margin: 0;
  text-align: center;
  @media (max-width: ${breakPoints.smaller}) {
    width: 80%;
  }
`;
export const ErrorMainMessage = styled.p`
  padding: 6px;
  margin: 0;
  text-align: center;
  margin-bottom: 8px;
  border-bottom: 1px solid ${pallete.yellow};
  @media (max-width: ${breakPoints.smaller}) {
    width: 80%;
  }
`;
export const MonkeyImage = styled.img`
  cursor: pointer;
  padding: 16px;
  &:active {
    transition: 350ms;
    transform: scale(1.3);
  }
  @media (max-width: ${breakPoints.smaller}) {
    width: 80%;
  }
`;
export const ReloadPageIcon = styled(AiOutlineReload)`
  cursor: pointer;
  animation: rotate 5s infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
