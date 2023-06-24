import { styled } from "styled-components";
import { BsSearch, BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

const paleta = {
  backgroundColorLight: "rgb(229, 229, 229)",
  backgroundColorDark: "#141414",
  darkGray: "#212121",
  fontColorBlack: "#121212",
  fontColorWhite: "rgb(216, 216, 216)",
  fontSizeTitle: "28px",
  green: "rgb(94, 165, 96)",
  yellow: "#e8dc56",
};

// GameList
export const GameListContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 100%;
  padding: 0;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  :focus {
    outline: none;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 400px;
  border-bottom: 1px solid ${paleta.yellow};
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  caret-color: ${paleta.yellow};
  color: ${paleta.fontColorWhite};
  font-size: 16px;
  :focus {
    outline: none;
  }
`;
export const SearchIcon = styled(BsSearch)``;

//GenreFilter
export const GenreList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GenreListTitle = styled.p`
  text-decoration: none;
`;
export const GenreListButton = styled.button<{ clicked: boolean }>`
  border: none;
  background-color: ${(props) =>
    props.clicked ? `${paleta.yellow}` : `${paleta.darkGray}`};
  border-radius: 15px;
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
  color: ${(props) =>
    props.clicked
      ? `${paleta.backgroundColorDark}`
      : `${paleta.fontColorWhite}`};
  &:hover {
    border: 1px solid ${paleta.yellow};
  }
`;

//Games
export const GameList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

// Card
export const CardContainer = styled.div`
  background-color: ${paleta.darkGray};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  margin: 8px 0;
  align-items: center;
  width: 30%;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    transition: 350ms;
    border: 1px solid ${paleta.yellow};
  }
`;
export const CardContainerLink = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
export const CardThumb = styled.img`
  border-radius: 15px;
`;
export const CardTitle = styled.h3`
  color: ${paleta.fontColorWhite};
  border-bottom: 1px solid ${paleta.yellow};
`;
export const CardGameInfoContainer = styled.div`
  width: 100%;
`;
export const CardGameInfo = styled.p`
  color: ${paleta.fontColorWhite};
  margin: 8px 24px;
`;
export const CardGameInfoMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  border-radius: 15px;
`;
export const CardGameSummary = styled.span`
  text-align: justify;
`;
export const CardTextLink = styled.a`
  color: white;
  border-bottom: 1px solid ${paleta.yellow};
`;

//Header
export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${paleta.backgroundColorLight};
  color: ${paleta.fontColorBlack};
  height: 8vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;
export const HeaderList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;
export const HeaderListItem = styled.li`
  margin-left: 16px;
`;
export const ArrowUpIcon = styled(BsArrowUpCircle)`
  cursor: pointer;
  margin-right: 16px;
`;

//ErrorPage
export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ErrorMessage = styled.p`
  padding: 6px;
  border-bottom: 1px solid ${paleta.yellow};
`;
export const MonkeyFixer = styled.img`
  cursor: pointer;
  padding: 16px;
  &:active {
    transition: 350ms;
    transform: scale(1.3);
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
