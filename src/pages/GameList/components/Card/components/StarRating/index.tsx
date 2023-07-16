import { useState, useEffect } from "react";
import * as S from "./styles";
import { useFirebaseAuth } from "../../../../../../hooks/useFirebaseAuth";
import { StarRatignProps } from "../../../../../../types";

export default function StarRating({
  id,
  setShowModal,
  postRating,
  user,
  firebaseRatedGames,
}: StarRatignProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [{ fetchRatedGames }] = useFirebaseAuth();

  useEffect(() => {
    fetchRatedGames();
  }, [user, id]);

  useEffect(() => {
    postRating(rating, id);
  }, [rating]);

  useEffect(() => {
    const ratedGame = firebaseRatedGames?.find((game: any) => game.id === id);
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

  function handleStarHover(value: number) {
    setIsHovered(value);
  }

  function handleStarLeave() {
    setIsHovered(null);
  }

  const renderStars = () => {
    const stars = [];
    const maxRating = 4;

    for (let i = 1; i <= maxRating; i++) {
      const isFilled = rating !== null && i <= rating;
      const isStarHovered = isHovered !== null && i <= isHovered;

      let starIcon;

      if (isFilled) {
        starIcon = (
          <S.FilledStarIcon
            size="20"
            key={i}
            onClick={() => onStarClick(i)}
            onMouseEnter={() => handleStarHover(i)}
            onMouseLeave={handleStarLeave}
          />
        );
      } else {
        starIcon = (
          <S.OutlinedStarIcon
            size="20"
            key={i}
            onClick={() => onStarClick(i)}
            onMouseEnter={() => handleStarHover(i)}
            onMouseLeave={handleStarLeave}
            hovered={isStarHovered ? "true" : "false"}
          />
        );
      }

      stars.push(starIcon);
    }

    return stars;
  };

  return <S.StarContainer>{renderStars()}</S.StarContainer>;
}
