import { useState, useEffect } from "react";
import { FirebaseFavorite } from "../types";

export default function useFavoritesListSize(
  firebaseFavorites: FirebaseFavorite[]
) {
  const [favoriteListSize, setFavoriteListSize] = useState(0);

  useEffect(() => {
    const favoriteList = firebaseFavorites.flatMap((item) => item.favorites);
    const bufferFavoriteSize = favoriteList.length;
    favoriteList.map((item) =>
      item === undefined
        ? setFavoriteListSize(0)
        : setFavoriteListSize(bufferFavoriteSize)
    );
  }, [favoriteListSize, firebaseFavorites]);

  return favoriteListSize;
}
