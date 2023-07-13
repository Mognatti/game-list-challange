import { Game, GameProps } from "../../../../types";
import { useState, useEffect } from "react";
import * as S from "./styles";
import Card from "../Card";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";

export default function Games({
  search,
  filter,
  isFilterFav,
  sortByRating,
  gameList,
}: GameProps) {
  const [filteredList, setFilteredList] = useState<Game[]>();
  const [{ firebaseFavorites, firebaseRatedGames }] = useFirebaseAuth();

  useEffect(() => {
    const searchGame = (gameTitle: string) => {
      const reg = new RegExp(search, "i");
      return reg.test(gameTitle);
    };

    const filterGame = (gameGenre: string) => {
      if (filter !== null) {
        return filter === gameGenre;
      }
      return true;
    };

    let updatedList;

    if (isFilterFav) {
      const filteredFavs = firebaseFavorites.flatMap((item) =>
        item.favorites.filter(
          (game) => searchGame(game.title) && filterGame(game.genre)
        )
      );
      updatedList = filteredFavs;
    } else {
      const newGameList = gameList.filter(
        (game) => searchGame(game.title) && filterGame(game.genre)
      );
      updatedList = newGameList;
    }

    setFilteredList(updatedList);
  }, [search, filter, isFilterFav, firebaseFavorites, gameList, sortByRating]);

  useEffect(() => {
    const sortFilteredList = () => {
      if (filteredList) {
        const sortedList = [...filteredList].sort((a, b) => {
          const scoreA =
            firebaseRatedGames?.find((item) => item.id === a.id)?.score || 0;
          const scoreB =
            firebaseRatedGames?.find((item) => item.id === b.id)?.score || 0;

          if (scoreA === 0 || scoreB === 0) {
            return scoreB - scoreA;
          }
          if (scoreA === undefined || scoreB === undefined) return 1;
          if (sortByRating) {
            return scoreB - scoreA;
          }
          return scoreA - scoreB;
        });

        setFilteredList(sortedList);
      }
    };

    sortFilteredList();
  }, [sortByRating, firebaseRatedGames]);

  return (
    <S.GameList>
      {filteredList?.map((game: Game) => {
        return <Card key={game.id} {...{ game }} />;
      })}
    </S.GameList>
  );
}
