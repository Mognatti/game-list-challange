import { useState } from "react";
import * as S from "./styles";
export default function StarRating() {
  const [rating, setRating] = useState<number | null>(null);

  const handleClick = (selectedRating: number) => {
    if (rating === selectedRating) {
      setRating(null);
    } else {
      setRating(selectedRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      let starIcon;
      if (rating !== null && i <= rating) {
        starIcon = (
          <S.FilledStarIcon key={i} size="20" onClick={() => handleClick(i)} />
        );
      } else if (rating !== null && i === rating + 0.5) {
        starIcon = (
          <S.HalfStarIcon key={i} size="20" onClick={() => handleClick(i)} />
        );
      } else {
        starIcon = (
          <S.OutlinedStarIcon
            key={i}
            size="20"
            onClick={() => handleClick(i)}
          />
        );
      }

      stars.push(starIcon);
    }

    return stars;
  };

  return <S.StarContainer>{renderStars()}</S.StarContainer>;
}
