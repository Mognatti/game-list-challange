import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";

const paleta = {
  cardBg: "rgba(0,0,0,0.7)",
  cardFontColor: "#FFF",
};

// GameList
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  :focus-visible,
  :focus {
    outline-offset: none;
    outline: none;
    border: none;
  }
`;
export const SearchIcon = styled(BsSearch)``;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 400px;
  border-bottom: 1px solid black;
`;

export const GameList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
  list-style: none;
`;

// Card
export const CardContainer = styled.div`
  background-color: ${paleta.cardBg};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 16px 0px;
  margin: 8px 0;
  align-items: center;
`;

export const CardThumb = styled.img`
  border-radius: 15px;
`;

export const CardTitle = styled.h3`
  color: ${paleta.cardFontColor};
`;

export const CardGameGenre = styled.p`
  color: ${paleta.cardFontColor};
  margin: 0;
`;
