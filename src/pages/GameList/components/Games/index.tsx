import { Game, GameProps } from "../../../../types";
import * as S from "./styles";
import Card from "../Card";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import { useEffect } from "react";

export default function Games({
  games,
  firebaseRatedGames,
  firebaseUserDocsData,
}: GameProps) {
  const [
    {
      addToFirebaseFavorites,
      removeFromFirebaseFavorites,
      postRating,
      user,
      fetchFirebaseUserDocsData,
      fetchRatedGames,
    },
  ] = useFirebaseAuth();

  useEffect(() => {
    if (user) {
      fetchFirebaseUserDocsData(user.uid);
      fetchRatedGames();
    }
  }, []);

  return (
    <S.GameList>
      {games?.map((game: Game) => {
        return (
          <Card
            key={game.id}
            {...{
              game,
              addToFirebaseFavorites,
              removeFromFirebaseFavorites,
              user,
              postRating,
              firebaseRatedGames,
              firebaseUserDocsData,
            }}
          />
        );
      })}
    </S.GameList>
  );
}
