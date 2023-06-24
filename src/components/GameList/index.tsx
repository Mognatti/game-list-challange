import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import * as S from "../../styles/StyledComponents";
import Search from "../Search";
import GenreFilter from "../GenreFilter";
import Games from "../Games";
import Loader from "../Loader";
import ErrorPage from "../ErrorPage";
import Header from "../Header";

export default function GameList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const [{ gameList, genreList, isLoading, isError, errorMessage }] =
    useFetch();

  if (isError) return <ErrorPage errorMessage={errorMessage} />;
  if (isLoading) return <Loader />;
  if (gameList && genreList)
    return (
      <>
        <Header />
        <S.GameListContainer>
          <S.SearchContainer>
            <Search {...{ search, setSearch }} />
            <GenreFilter {...{ filter, setFilter, genreList }} />
          </S.SearchContainer>
          <Games {...{ search, filter, gameList }} />
        </S.GameListContainer>
      </>
    );
}
