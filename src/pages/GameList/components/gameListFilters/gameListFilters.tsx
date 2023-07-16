import { FirebaseFavorite, Game, ratedGames } from "../../../../types";

export const searchGame = (search: string, gameTitle: string) => {
  const reg = new RegExp(search, "i");
  return reg.test(gameTitle);
};
export const filterGame = (filter: string | null, gameGenre: string) => {
  if (filter !== null) {
    return filter === gameGenre;
  }
  return true;
};

export const sortFilteredList = (
  firebaseRatedGames: ratedGames[] | undefined,
  sortByRating: boolean,
  filteredList: any
) => {
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

export const getFilteredList = (
  isFilterByFavorites: boolean,
  filter: string | null,
  search: string,
  games: Game[] | FirebaseFavorite[]
) => {
  let updatedList: Game[];

  if (isFilterByFavorites) {
    const filteredFavs = (games as FirebaseFavorite[]).flatMap((item: any) =>
      item.favorites.filter(
        (game: any) =>
          searchGame(search, game.title) && filterGame(filter, game.genre)
      )
    );
    updatedList = filteredFavs;
  } else {
    const newGameList: Game[] = (games as Game[]).filter(
      (game: Game) =>
        searchGame(search, game.title) && filterGame(filter, game.genre)
    );
    updatedList = newGameList;
  }

  return updatedList;
};
