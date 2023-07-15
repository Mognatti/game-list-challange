import { useState, useEffect } from "react";
import * as S from "./styles";
import { useFirebaseAuth } from "../../../../../../hooks/useFirebaseAuth";

interface Props {
  id: number;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
}

export default function StarRating({ id, setShowModal }: Props) {
  const [rating, setRating] = useState<number | null>(null);
  const [{ user, postRating, firebaseRatedGames }] = useFirebaseAuth();

  useEffect(() => {
    postRating(rating, id);
  }, [rating]);

  useEffect(() => {
    const ratedGame = firebaseRatedGames?.find((game) => game.id === id);

    if (ratedGame) {
      setRating(ratedGame.score);
    }
  }, [firebaseRatedGames]);

  function onStarClick(value: number) {
    if (user) {
      if (value === rating) {
        setRating(0);
      } else {
        setRating(value);
      }
    } else if (!user) setShowModal("true");
  }
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      let starIcon;

      if (rating !== null && i <= rating) {
        starIcon = (
          <S.FilledStarIcon size="20" key={i} onClick={() => onStarClick(i)} />
        );
      } else {
        starIcon = (
          <S.OutlinedStarIcon
            size="20"
            key={i}
            onClick={() => onStarClick(i)}
          />
        );
      }

      stars.push(starIcon);
    }

    return stars;
  };

  return <S.StarContainer>{renderStars()}</S.StarContainer>;
}
