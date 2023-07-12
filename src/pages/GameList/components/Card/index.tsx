import * as S from "./styles";
import dayjs from "dayjs";
import { Game } from "../../../../types";
import { useState, useEffect } from "react";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import AskToLoginModal from "./components/Modal";
import StarRating from "./components/StarRating";

export interface CardProps {
  game: Game;
}

export default function Card({ game }: CardProps) {
  const [markedAsFavorited, setMarkedAsFavorited] = useState<boolean>();
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [
    {
      addToFirebaseFavorites,
      removeFromFirebaseFavorites,
      firebaseFavorites,
      user,
    },
  ] = useFirebaseAuth();

  const cardInfo = [
    `Data de lançamento: ${dayjs(game.release_date).format("DD/MM/YYYY")}`,
    `Gênero: ${game.genre}`,
    `Produtora: ${game.developer}`,
    `Plataformas: ${game.platform}`,
    `Publisher: ${game.publisher}`,
  ];

  useEffect(() => {
    const isFavorite = (id: number): boolean => {
      for (const item of firebaseFavorites) {
        if (item.favorites && Array.isArray(item.favorites)) {
          for (const favorite of item.favorites) {
            if (favorite.id === id) {
              return true;
            }
          }
        }
      }
      return false;
    };
    setMarkedAsFavorited(isFavorite(game.id));
  }, [firebaseFavorites, game.id]);

  async function sendData(game: Game) {
    if (!user) {
      setShowModal(true);
    } else {
      await addToFirebaseFavorites(game);
      setMarkedAsFavorited((prevMarkedAsFavorited) => !prevMarkedAsFavorited);
    }
  }

  async function removeData(game: Game) {
    await removeFromFirebaseFavorites(game);
    setMarkedAsFavorited((prevMarkedAsFavorited) => !prevMarkedAsFavorited);
  }

  const favIcon = markedAsFavorited ? (
    <S.FilledHeartIcon size="25" onClick={() => removeData(game)} />
  ) : (
    <S.OutlineHeartIcon size="25" onClick={() => sendData(game)} />
  );

  return (
    <S.CardContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.CardThumb src={game.thumbnail} alt={`Imagem do jogo ${game.title}`} />
      <S.CardTitle>{game.title}</S.CardTitle>
      {isHover ? (
        <S.CardGameInfoContainer>
          {cardInfo.map((info) => (
            <S.CardGameInfo key={info}>{info}</S.CardGameInfo>
          ))}
        </S.CardGameInfoContainer>
      ) : (
        cardInfo.filter((info) => info.includes("Gênero"))
      )}
      <S.CardGameLinkList>
        {/* <S.CardGameLink href={game.freetogame_profile_url} target="_blank">
          <S.CardGameMoreInfoIcon size="20" />
        </S.CardGameLink> */}
        {favIcon}
        <StarRating id={game.id} {...{ setShowModal }} />
        {/* <S.CardGameLink href={game.game_url} target="_blank">
          <S.CardGameStoreIcon size="20" />
        </S.CardGameLink> */}
      </S.CardGameLinkList>
      <AskToLoginModal {...{ showModal, setShowModal }} />
    </S.CardContainer>
  );
}
