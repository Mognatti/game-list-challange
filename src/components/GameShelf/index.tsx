import { useEffect, useState } from "react";
import { GetData } from "../Requests";
import * as S from "../../styles/StyledComponents";
import { Game } from "../Card";

export default function GameShelf() {
  const [gameList, setGameList] = useState<Game[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetData(setGameList, setIsLoading);
  }, []);

  if (isLoading) return <p>Carreagndo dados...</p>;

  return (
    <S.GameList>
      {gameList?.map((game) => {
        return <S.GameItem key={game.id}>{game.title}</S.GameItem>;
      })}
    </S.GameList>
  );
}
