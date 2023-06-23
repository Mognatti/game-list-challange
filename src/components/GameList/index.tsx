import { useState } from "react";
import { useFetch } from "../../hooks/useGetData";
import * as S from "../../styles/StyledComponents";
import { Game } from "../../types";
import Card from "../Card";

export default function GameList() {
  const [{ gameList, genreList, isLoading, isError, errorMessage }]: any =
    useFetch();
  const [search, setSearch] = useState("");

  const filteredArray = gameList?.filter((game: Game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isError) return <p>{errorMessage}</p>;
  if (isLoading) return <p>Carreagndo dados...</p>;

  return (
    <section>
      <S.SearchContainer>
        <p>Filtro por gênero</p>
        <ul>
          {genreList.map((genre: string) => (
            <li key={genre}>
              <button>{genre}</button>
            </li>
          ))}
        </ul>
        <S.TextBox>
          <S.SearchInput
            type="text"
            placeholder="Busca por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.SearchIcon />
        </S.TextBox>
      </S.SearchContainer>
      <S.GameList>
        {filteredArray?.map((game: Game) => {
          return <Card key={game.id} {...game} />;
        })}
      </S.GameList>
    </section>
  );
}
