import { styled } from "styled-components";
import { BsSearch, BsArrowUpCircle, BsFilter, BsInfoLg } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const pallete = {
  backgroundColorLight: "rgb(229, 229, 229)",
  backgroundColorDark: "#141414",
  darkGray: "#212121",
  fontColorBlack: "#121212",
  fontColorWhite: "rgb(216, 216, 216)",
  yellow: "#e8dc56",
};

const breakPoints = {
  bigger: "1223px",
  big: "1128px",
  mid: "925px",
  midSmall: "780px",
  small: "660px",
  smaller: "535px",
  smallest: "455px",
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
  width: 100%;
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
  border-bottom: 1px solid ${pallete.yellow};
  @media (max-width: ${breakPoints.smallest}) {
    width: 60%;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  caret-color: ${pallete.yellow};
  color: ${pallete.fontColorWhite};
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
  padding: 0;
`;
export const GenreListButton = styled.button<{ clicked: boolean }>`
  background-color: ${(props) =>
    props.clicked ? `${pallete.yellow}` : `${pallete.darkGray}`};
  color: ${(props) =>
    props.clicked
      ? `${pallete.backgroundColorDark}`
      : `${pallete.fontColorWhite}`};
  border: none;
  border-radius: 15px;
  padding: 8px;
  margin: 0px 4px;
  cursor: pointer;
  &:hover {
    outline: 1px solid ${pallete.yellow};
  }
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 400px;
  border-bottom: 1px solid ${pallete.yellow};
  @media (max-width: ${breakPoints.smallest}) {
    width: 60%;
  }
`;
export const GenreSelectFilter = styled.select`
  margin-top: 16px;
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${pallete.fontColorWhite};
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  &:focus > option {
    background-color: ${pallete.backgroundColorDark};
    color: ${pallete.fontColorWhite};
  }
  &:focus > option:checked {
    color: ${pallete.yellow};
  }
`;
export const GenreFilterIcon = styled(BsFilter)``;

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
  margin: 0;
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
  border: 1px solid ${pallete.yellow};
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
  border: 1px solid ${pallete.yellow};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;

//Header
export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${pallete.backgroundColorLight};
  color: ${pallete.fontColorBlack};
  height: 8vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: ${breakPoints.smallest}) {
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;
export const HeaderTitle = styled.span`
  font-size: 1em;
  font-weight: 400;
  text-align: center;
`;
export const HeaderListItem = styled.li`
  margin-left: 16px;
  &:nth-of-type(1) {
    @media (max-width: ${breakPoints.smallest}) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }
  &:nth-of-type(2) {
    display: flex;
  }
`;
export const ArrowUpIcon = styled(BsArrowUpCircle)`
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    transition: 350ms;
    opacity: 0.5;
  }
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
