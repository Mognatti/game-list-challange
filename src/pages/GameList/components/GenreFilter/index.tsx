import { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { GameFilterProps } from "../../../../types";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import AskToLoginModal from "../Modal";
import useWindowSize from "../../../../hooks/useWindowSize";

export default function GenreFilter({
  filter,
  setFilter,
  isFilterFav,
  setIsFilterFav,
  genreList,
}: GameFilterProps) {
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [showModal, setShowModal] = useState("false");
  const [{ user }] = useFirebaseAuth();
  const [{ showSelect }] = useWindowSize();

  const selectFilter = (genre: string, index?: number) => {
    if (filter === genre) {
      setFilter(null);
      setClickedButton(null);
      return { filter, clickedButton };
    } else {
      setFilter(genre);
      if (index || index === 0) setClickedButton(index);
      return { filter, clickedButton };
    }
  };

  const filterFavorite = () => {
    if (!user) {
      return setShowModal("true");
    }
    if (isFilterFav) {
      setIsFilterFav(false);
      return isFilterFav;
    } else {
      setIsFilterFav(true);
      return isFilterFav;
    }
  };

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "favoritos") {
      setIsFilterFav(!isFilterFav);
      setFilter(null);
    } else {
      selectFilter(e.target.value);
      setIsFilterFav(false);
    }
  }

  if (showSelect === true) {
    return (
      <S.SelectBox>
        <S.GenreSelectFilter
          id="selectGenre"
          ref={selectRef}
          onChange={(e) => handleSelect(e)}
        >
          <option value={selectRef.current?.value}>
            Filtrar por gênero...
          </option>
          {genreList.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
          <option value={"favoritos"}>Favoritos</option>
        </S.GenreSelectFilter>
        <S.GenreFilterIcon size="20" />
      </S.SelectBox>
    );
  } else {
    return (
      <>
        <AskToLoginModal {...{ showModal, setShowModal }} />
        <S.GenreList>
          {genreList.map((genre: string, index) => (
            <S.GenreListButton
              key={genre}
              clicked={clickedButton === index ? "true" : "false"}
              onClick={() => selectFilter(genre, index)}
            >
              {genre}
            </S.GenreListButton>
          ))}
          <S.GenreListButton
            clicked={isFilterFav.toString()}
            onClick={() => filterFavorite()}
          >
            Favortios <S.FavFilter size="20" />
          </S.GenreListButton>
        </S.GenreList>
      </>
    );
  }
}
