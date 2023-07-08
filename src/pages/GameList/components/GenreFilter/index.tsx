import { useState, useEffect, useRef } from "react";
import * as S from "../../../../styles/StyledComponents";

interface Props {
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genreList: string[];
}
const breakPoint = 1127;
export default function GenreFilter({ filter, setFilter, genreList }: Props) {
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [windowSize] = useState<number>(breakPoint);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (window.innerWidth > windowSize) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
    window.addEventListener("resize", () =>
      window.innerWidth <= windowSize
        ? setShowSelect(true)
        : setShowSelect(false)
    );
  }, [windowSize]);

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

  if (showSelect === true) {
    return (
      <S.SelectBox>
        <S.GenreSelectFilter
          id="selectGenre"
          ref={selectRef}
          onChange={(e) => selectFilter(e.target.value)}
        >
          <option value={selectRef.current?.value}>
            Filtrar por gênero...
          </option>
          {genreList.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </S.GenreSelectFilter>
        <S.GenreFilterIcon size="20" />
      </S.SelectBox>
    );
  } else {
    return (
      <S.GenreList>
        {genreList.map((genre: string, index) => (
          <S.GenreListButton
            key={genre}
            clicked={clickedButton === index}
            onClick={() => selectFilter(genre, index)}
          >
            {genre}
          </S.GenreListButton>
        ))}
      </S.GenreList>
    );
  }
}
