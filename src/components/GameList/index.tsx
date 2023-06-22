import { useState } from "react";
import { useFetch } from "../../hooks/useGetData";
import * as S from "../../styles/StyledComponents";
import { Game } from "../../types";
import Card from "../Card";

export default function GameList() {
  const [{ gameList, isLoading, isError, errorMessage }]: any = useFetch();
  const [search, setSearch] = useState("");

  const filtredArray = gameList?.filter((game: Game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isError) return <p>{errorMessage}</p>;
  if (isLoading) return <p>Carreagndo dados...</p>;

  return (
    <section>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <S.GameList>
        {filtredArray?.map((game: Game) => {
          return <Card {...game} />;
        })}
      </S.GameList>
    </section>
  );
}
