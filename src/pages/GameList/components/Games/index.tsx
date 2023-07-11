import { Game, GameProps } from "../../../../types";
import { useState, useEffect } from "react";
import * as S from "./styles";
import Card from "../Card";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";

export default function Games({
  search,
  filter,
  isFilterFav,
  gameList,
}: GameProps) {
  const [filteredList, setFilteredList] = useState<Game[]>();
  const [{ firebaseFavorites }] = useFirebaseAuth();

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
  useEffect(() => {
    if (isFilterFav) {
      const filteredFavs = firebaseFavorites.flatMap((item) =>
        item.favorites.filter(
          (game) => searchGame(game.title) && filterGame(game.genre)
        )
      );
      setFilteredList(filteredFavs);
    } else {
      const newGameList = gameList.filter(
        (game) => searchGame(game.title) && filterGame(game.genre)
      );
      setFilteredList(newGameList);
    }
  }, [search, filter, isFilterFav]);

  return (
    <S.GameList>
      {filteredList?.map((game: Game) => {
        return <Card key={game.id} {...game} />;
      })}
    </S.GameList>
  );
}
