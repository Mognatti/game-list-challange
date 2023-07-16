import { useState, useEffect } from "react";
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
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import {
  getFilteredList,
  sortFilteredList,
} from "./components/gameListFilters/gameListFilters";
import ScrollTop from "../../components/ScrollToTop/ScrollTop";

export default function GameList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [isFilterByFavorites, setIsFilterByFavorites] =
    useState<boolean>(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [sortedGameList, setSortedGameList] = useState<any[]>([]);
  const [{ gameList, genreList, isLoading, isError, errorMessage }] =
    useFetch();
  const [
    {
      firebaseUserDocsData,
      firebaseRatedGames,
      user,
      fetchFirebaseUserDocsData,
      fetchRatedGames,
    },
  ] = useFirebaseAuth();

  useEffect(() => {
    fetchRatedGames();
  }, [gameList, user]);

  useEffect(() => {
    const favoriteNotUndefined =
      firebaseUserDocsData.find((item) => "favorites" in item) !== undefined;
    if (user) {
      fetchFirebaseUserDocsData(user.uid);
    }
    if (!favoriteNotUndefined) {
      const listToFilter: any[] = [];
      setSortedGameList(listToFilter);
    }
    if (gameList && !isFilterByFavorites) {
      const listToFilter = getFilteredList(
        isFilterByFavorites,
        filter,
        search,
        gameList
      );
      const newGameList = sortFilteredList(
        firebaseRatedGames,
        sortByRating,
        listToFilter
      );
      if (newGameList) setSortedGameList(newGameList);
    } else if (isFilterByFavorites && favoriteNotUndefined) {
      const listToFilter = getFilteredList(
        isFilterByFavorites,
        filter,
        search,
        firebaseUserDocsData
      );
      const newGameList = sortFilteredList(
        firebaseRatedGames,
        sortByRating,
        listToFilter
      );
      if (newGameList) setSortedGameList(newGameList);
    }
  }, [gameList, search, filter, isFilterByFavorites, sortByRating]);

  return (
    <>
      <Header />
      <Banner />
      {isLoading && <Loader />}
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
                isFilterByFavorites,
                setIsFilterByFavorites,
                genreList,
              }}
            />
          </S.SearchContainer>
          <ScrollTop />
          <Games
            games={sortedGameList}
            firebaseRatedGames={firebaseRatedGames}
            firebaseUserDocsData={firebaseUserDocsData}
          />
        </S.GameListContainer>
      )}
    </>
  );
}
