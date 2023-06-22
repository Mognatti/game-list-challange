import { styled } from "styled-components";

const paleta = {
  cardBg: "rgba(0,0,0,0.7)",
  cardFontColor: "#FFF",
};

// GameList
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
