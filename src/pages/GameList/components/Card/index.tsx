import * as S from "./styles";
import { Game } from "../../../../types";
import { useState, useEffect } from "react";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import AskToLoginModal from "../Modal";
import StarRating from "./components/StarRating";

export interface CardProps {
  game: Game;
}

export default function Card({ game }: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const [markedAsFavorited, setMarkedAsFavorited] = useState<boolean>();
  const [
    {
      addToFirebaseFavorites,
      removeFromFirebaseFavorites,
      firebaseFavorites,
      user,
    },
  ] = useFirebaseAuth();

  const cardSmallerInfo = [game.publisher, game.platform];
  const cardHiddenInfo = [
    {
      icon: (
        <S.CardGameMoreInfoIcon key={game.freetogame_profile_url} size="20" />
      ),
      url: game.freetogame_profile_url,
    },
    {
      icon: <S.CardGameStoreIcon key={game.game_url} size="20" />,
      url: game.game_url,
      key: 90987,
    },
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

  async function favoriteSetter(game: Game) {
    if (!user) {
      setShowModal(true);
    } else {
      await addToFirebaseFavorites(game);
      setMarkedAsFavorited(!markedAsFavorited);
    }
  }

  async function favoriteRemover(game: Game) {
    await removeFromFirebaseFavorites(game);
    setMarkedAsFavorited(!markedAsFavorited);
  }

  const favIcon = markedAsFavorited ? (
    <S.FilledHeartIcon size="25" onClick={() => favoriteRemover(game)} />
  ) : (
    <S.OutlineHeartIcon size="25" onClick={() => favoriteSetter(game)} />
  );

  return (
    <>
      <AskToLoginModal {...{ showModal, setShowModal }} />
      <S.CardContainer>
        <S.CardThumb
          src={game.thumbnail}
          alt={`Imagem do jogo ${game.title}`}
        />
        <S.CardTitle>{game.title}</S.CardTitle>
        <S.CardDisplayInfoContainer>
          <S.SmallerInfo>
            {cardSmallerInfo.map((info) => (
              <S.SmallerInfoText key={info}>{info}</S.SmallerInfoText>
            ))}
          </S.SmallerInfo>
          <S.GenreInfo>
            <S.GenreText>{game.genre}</S.GenreText>
          </S.GenreInfo>
        </S.CardDisplayInfoContainer>

        <S.CardHiddenInfoContainer>
          {cardHiddenInfo.map((info) => (
            <S.CardGameLink href={info.url} target="_blank" key={info.key}>
              {info.icon}
            </S.CardGameLink>
          ))}
        </S.CardHiddenInfoContainer>

        <S.CardGameLinkList>
          {favIcon}
          <StarRating id={game.id} {...{ setShowModal }} />
        </S.CardGameLinkList>
      </S.CardContainer>
    </>
  );
}
