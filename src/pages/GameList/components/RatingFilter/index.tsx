export interface RatingFilterProps {
  sortByRating: boolean;
  setSortByRating: React.Dispatch<React.SetStateAction<boolean>>;
}
import { useState } from "react";
import * as S from "./styles";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";

export default function RatingFilter({
  sortByRating: sortByRatign,
  setSortByRating: setSortByRating,
}: RatingFilterProps) {
  const [isChangeIcon, setisChangeIcon] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [{ user }] = useFirebaseAuth();

  function changeIcon() {
    setSortByRating(!sortByRatign);
    setIsClicked(!isClicked);
    setisChangeIcon(!isChangeIcon);
  }
  return (
    <S.ButtonContainer>
      <S.SortButton>
        {user ? (
          isChangeIcon ? (
            <div>
              <S.SortHigher
                size="25"
                clicked={isClicked}
                onClick={() => changeIcon()}
              />
              <div style={{ color: "white" }}>Maior Avaliação</div>
            </div>
          ) : (
            <div>
              <S.SortLower
                size="25"
                clicked={isClicked}
                onClick={() => changeIcon()}
              />
              <div style={{ color: "white" }}>Menor Avaliação</div>
            </div>
          )
        ) : (
          ""
        )}
      </S.SortButton>
    </S.ButtonContainer>
  );
}
