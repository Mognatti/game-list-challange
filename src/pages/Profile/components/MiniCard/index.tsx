import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import { Game } from "../../../../types";
import * as S from "./styles";
import { useState } from "react";

export default function MiniCard(game: Game) {
  const [imgHover, setImgHover] = useState(false);
  const [isFav, setIsFav] = useState(true);
  const [{ removeFromFirebaseFavorites, addToFirebaseFavorites }] =
    useFirebaseAuth();

  async function removeGame(game: Game) {
    await removeFromFirebaseFavorites(game);
    setIsFav(false);
  }

  async function restoreGame(game: Game) {
    await addToFirebaseFavorites(game);
    setIsFav(true);
  }

  return (
    <S.MiniCardContainer
      onMouseEnter={() => setImgHover(true)}
      onMouseLeave={() => setImgHover(false)}
    >
      <a href={game.game_url}>
        <S.MiniCardImg src={game.thumbnail} alt={game.title} />
      </a>
      <S.MiniCardTitleDiv hover={imgHover}>
        <S.MiniCardTitle>{game.title}</S.MiniCardTitle>

        {isFav ? (
          <S.FavIcon size="25" onClick={() => removeGame(game)} />
        ) : (
          <S.NotFavIcon size="25" onClick={() => restoreGame(game)} />
        )}
      </S.MiniCardTitleDiv>
    </S.MiniCardContainer>
  );
}
