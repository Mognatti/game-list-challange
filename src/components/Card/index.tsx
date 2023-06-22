import * as S from "../../styles/StyledComponents";
import { Game } from "../../types";

export default function Card(game: Game) {
  return (
    <S.CardContainer>
      <S.CardThumb src={game.thumbnail} alt={`Imagem do jogo ${game.title}`} />
      <S.CardTitle>{game.title}</S.CardTitle>
      <S.CardGameGenre>Gênero: {game.genre}</S.CardGameGenre>
    </S.CardContainer>
  );
}
