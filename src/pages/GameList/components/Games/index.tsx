import { Game } from "../../../../types";
import { useState, useEffect } from "react";
import * as S from "../../../../styles/StyledComponents";
import Card from "../Card";

interface Props {
  search: string;
  filter: string | null;
  gameList: Game[];
}

export default function Games({ search, filter, gameList }: Props) {
  const [filteredList, setFilteredList] = useState<Game[]>();

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
    const newGameList = gameList.filter(
      (game) => searchGame(game.title) && filterGame(game.genre)
    );
    setFilteredList(newGameList);
  }, [search, filter]);

  return (
    <S.GameList>
      {filteredList?.map((game: Game) => {
        return <Card key={game.id} {...game} />;
      })}
    </S.GameList>
  );
}
