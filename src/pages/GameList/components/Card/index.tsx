import * as S from "./styles";
import dayjs from "dayjs";
import { Game } from "../../../../types";
import { useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../../config/firebase";
import { Navigate } from "react-router-dom";

export default function Card(game: Game) {
  const user = auth.currentUser;
  const [favorited, setFavorited] = useState(false);
  const cardInfo = [
    `Data de lançamento: ${dayjs(game.release_date).format("DD/MM/YYYY")}`,
    `Gênero: ${game.genre}`,
    `Produtora: ${game.developer}`,
    `Plataformas: ${game.platform}`,
    `Publisher: ${game.publisher}`,
  ];

  async function favGame(name: string, genre: string) {
    if (!user) {
      alert("Você precisa entrar para favoritar itens!");
      return <Navigate to="/auth" />;
    }
    setFavorited(!favorited);
  }

  return (
    <S.CardContainer>
      <S.CardThumb src={game.thumbnail} alt={`Imagem do jogo ${game.title}`} />
      <S.CardTitle>{game.title}</S.CardTitle>
      <S.CardGameInfoContainer>
        {cardInfo.map((info) => (
          <S.CardGameInfo key={info}>{info}</S.CardGameInfo>
        ))}
      </S.CardGameInfoContainer>
      <S.CardGameLinkList>
        <S.CardGameLink href={game.freetogame_profile_url} target="_blank">
          <S.CardGameMoreInfoIcon size="20" />
        </S.CardGameLink>
        {favorited ? (
          <S.FilledHeartIcon
            size="25"
            onClick={() => favGame(game.title, game.genre)}
          />
        ) : (
          <S.OutlineHeartIcon
            size="25"
            onClick={() => favGame(game.title, game.genre)}
          />
        )}
        <S.CardGameLink href={game.game_url} target="_blank">
          <S.CardGameStoreIcon size="20" />
        </S.CardGameLink>
      </S.CardGameLinkList>
    </S.CardContainer>
  );
}
