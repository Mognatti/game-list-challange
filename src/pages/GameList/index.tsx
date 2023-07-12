import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import * as S from "./styles";
import Search from "./components/Search";
import GenreFilter from "./components/GenreFilter";
import Games from "./components/Games";
import ErrorPage from "../ErrorPage";
import Header from "../../components/Header";
import Loader from "../Loader";
import Banner from "./components/Banner";
import RatingFilter from "./components/RatingFilter";

export default function GameList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [isFilterFav, setIsFilterFav] = useState<boolean>(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [{ gameList, genreList, isLoading, isError, errorMessage }] =
    useFetch();

  if (isError) return <ErrorPage errorMessage={errorMessage} />;
  if (isLoading) return <Loader />;
  if (gameList && genreList) {
    return (
      <>
        <Header />
        <Banner />
        <S.GameListContainer>
          <S.SearchContainer>
            <div style={{ display: "flex" }}>
              <Search {...{ search, setSearch }} />
              <RatingFilter {...{ sortByRating, setSortByRating }} />
            </div>
            <GenreFilter
              {...{
                filter,
                setFilter,
                isFilterFav,
                setIsFilterFav,
                genreList,
              }}
            />
          </S.SearchContainer>
          <Games {...{ search, filter, isFilterFav, sortByRating, gameList }} />
        </S.GameListContainer>
      </>
    );
  }
}
