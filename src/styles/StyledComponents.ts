import { styled } from "styled-components";
import { BsSearch, BsArrowUpCircle, BsFilter } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

export const pallete = {
  backgroundColorLight: "rgb(229, 229, 229)",
  backgroundColorDark: "#141414",
  darkGray: "#212121",
  fontColorBlack: "#121212",
  fontColorWhite: "rgb(216, 216, 216)",
  yellow: "#e8dc56",
};

export const palleteOpacity = {
  half: "80",
  third: "4D",
};

export const breakPoints = {
  bigger: "1223px",
  big: "1128px",
  mid: "925px",
  midSmall: "780px",
  small: "660px",
  smaller: "535px",
  smallest: "455px",
};

export const typografy = {
  fontSize: {
    title: "24px",
    regular: "16px",
    small: "12px",
  },
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
  z-index: 100;
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
