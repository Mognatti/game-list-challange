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
  const [
    { gameList, genreList, isLoading: isAPILoading, isError, errorMessage },
  ] = useFetch();

  return (
    <>
      <Header />
      <Banner />
      {isAPILoading && <Loader />}
      {isError && <ErrorPage errorMessage={errorMessage} />}
      {!isError && gameList && genreList && (
        <S.GameListContainer>
          <S.SearchContainer>
            <S.NameAndRatingFilter>
              <Search {...{ search, setSearch }} />
              <RatingFilter {...{ sortByRating, setSortByRating }} />
            </S.NameAndRatingFilter>
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
          <Games
            {...{
              search,
              filter,
              isFilterFav,
              sortByRating,
              gameList,
            }}
          />
        </S.GameListContainer>
      )}
    </>
  );
}
