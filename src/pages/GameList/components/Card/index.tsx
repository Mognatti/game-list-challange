import * as S from "./styles";
import { CardProps, Game } from "../../../../types";
import { useState, useEffect } from "react";
import AskToLoginModal from "../Modal";
import StarRating from "./components/StarRating";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";

export default function Card({
  game,
  addToFirebaseFavorites,
  removeFromFirebaseFavorites,
  user,
  firebaseUserDocsData,
  postRating,
  firebaseRatedGames,
}: CardProps) {
  const [showModal, setShowModal] = useState<string>("false");
  const [markedAsFavorited, setMarkedAsFavorited] = useState<boolean>();
  const [{ fetchRatedGames }] = useFirebaseAuth();
  const cardSmallerInfo = [game.publisher, game.platform];
  const cardHiddenInfo = [
    {
      icon: <S.CardGameMoreInfoIcon size="20" />,
      url: game.freetogame_profile_url,
    },
    {
      icon: <S.CardGameStoreIcon size="20" />,
      url: game.game_url,
    },
  ];

  const ratingScore =
    firebaseRatedGames?.find((item: any) => item.id === game.id)?.score || 0;

  useEffect(() => {
    const isFavorite = (id: number): boolean => {
      for (const item of firebaseUserDocsData) {
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
  }, [firebaseUserDocsData, game.id, firebaseRatedGames]);

  async function favoriteSetter(game: Game) {
    if (!user) {
      setShowModal("true");
    } else {
      await addToFirebaseFavorites(game);
      fetchRatedGames();
      setMarkedAsFavorited(!markedAsFavorited);
    }
  }

  async function favoriteRemover(game: Game) {
    await removeFromFirebaseFavorites(game);
    setMarkedAsFavorited(!markedAsFavorited);
  }

  const favIcon = markedAsFavorited ? (
    <S.FilledHeartIcon
      size="25"
      onClick={() => favoriteRemover(game)}
      clicked={markedAsFavorited ? "true" : "false"}
    />
  ) : (
    <S.OutlineHeartIcon
      size="25"
      onClick={() => favoriteSetter(game)}
      clicked={markedAsFavorited ? "false" : "true"}
    />
  );

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("X", e.clientX);
    console.log("Y", e.clientY);
  }
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("X", e.nativeEvent.clientX);
    console.log("Y", e.nativeEvent.clientY);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("X", e.clientX);
    console.log("Y", e.clientY);
  }
  return (
    <>
      <AskToLoginModal {...{ showModal, setShowModal }} />
      <S.CardContainer
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
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
            <S.CardGameLink href={info.url} target="_blank" key={info.url}>
              {info.icon}
            </S.CardGameLink>
          ))}
        </S.CardHiddenInfoContainer>

        <S.CardGameLinkList>
          {favIcon}
          <StarRating
            ratingScore={ratingScore}
            id={game.id}
            {...{ setShowModal, postRating, firebaseRatedGames, user }}
          />
        </S.CardGameLinkList>
      </S.CardContainer>
    </>
  );
}
