import { useState } from "react";
import * as S from "../../styles/StyledComponents";

interface Props {
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  genreList: string[];
}

export default function GenreFilter({ filter, setFilter, genreList }: Props) {
  const [clickedButton, setClicked] = useState<number | null>(null);

  const selectFilter = (genre: string, index: number) => {
    if (filter === genre) {
      setFilter(null);
      setClicked(null);
    } else {
      setFilter(genre);
      setClicked(index);
    }
  };
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
