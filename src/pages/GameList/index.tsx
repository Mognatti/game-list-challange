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
import { Game } from "../../types";

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

  const getFilteredList = (games: any[]) => {
    let updatedList: Game[];

    if (isFilterByFavorites) {
      const filteredFavs = games.flatMap((item: any) =>
        item.favorites.filter(
          (game: any) => searchGame(game.title) && filterGame(game.genre)
        )
      );
      updatedList = filteredFavs;
    } else {
      const newGameList = games?.filter(
        (game) => searchGame(game.title) && filterGame(game.genre)
      );
      updatedList = newGameList;
    }

    return updatedList;
  };

  const sortFilteredList = (filteredList: any) => {
    if (filteredList) {
      const sortedList = [...filteredList].sort((a, b) => {
        const scoreA =
          firebaseRatedGames?.find((item) => item.id === a.id)?.score || 0;
        const scoreB =
          firebaseRatedGames?.find((item) => item.id === b.id)?.score || 0;
        if (scoreA === 0 || scoreB === 0) {
          return scoreB - scoreA;
        }
        if (sortByRating) {
          return scoreB - scoreA;
        }
        return scoreA - scoreB;
      });
      return sortedList;
    }
  };
  useEffect(() => {
    fetchRatedGames();
  }, [gameList, user]);

  useEffect(() => {
    const favoriteExists =
      firebaseUserDocsData.find((item) => "favorites" in item) !== undefined;
    if (user) {
      fetchFirebaseUserDocsData(user.uid);
    }
    if (!favoriteExists) {
      const listToFilter: any[] = [];
      setSortedGameList(listToFilter);
    }
    if (gameList && !isFilterByFavorites) {
      const listToFilter = getFilteredList(gameList);
      const newGameList = sortFilteredList(listToFilter);
      if (newGameList) setSortedGameList(newGameList);
    } else if (isFilterByFavorites && favoriteExists) {
      const listToFilter = getFilteredList(firebaseUserDocsData);
      const newGameList = sortFilteredList(listToFilter);
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
