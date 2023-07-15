import * as S from "../../styles";
import { useState } from "react";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: Props) {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const handleSearchInputFocus = () => {
    setIsSearchInputFocused(true);
  };

  const handleSearchInputBlur = () => {
    setIsSearchInputFocused(false);
  };
  return (
    <S.TextBox focused={isSearchInputFocused.toString()}>
      <S.SearchInput
        type="text"
        placeholder="Busca por nome..."
        onFocus={handleSearchInputFocus}
        onBlur={handleSearchInputBlur}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.SearchIcon />
    </S.TextBox>
  );
}
