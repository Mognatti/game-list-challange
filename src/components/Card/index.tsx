import * as S from "../../styles/StyledComponents";
import dayjs from "dayjs";
import { Game } from "../../types";

export default function Card(game: Game) {
  return (
    <S.CardContainer>
      <S.CardContainerLink href={game.freetogame_profile_url} target="_blank">
        <S.CardThumb
          src={game.thumbnail}
          alt={`Imagem do jogo ${game.title}`}
        />
        <S.CardTitle>{game.title}</S.CardTitle>
        <S.CardGameInfoContainer>
          <S.CardGameInfo>
            Data de lançamento: {dayjs(game.release_date).format("DD/MM/YYYY")}
          </S.CardGameInfo>
          <S.CardGameInfo>Gênero: {game.genre}</S.CardGameInfo>
          <S.CardGameInfo>Produtora: {game.developer}</S.CardGameInfo>
          <S.CardGameInfo>Plataformas: {game.platform}</S.CardGameInfo>
          <S.CardGameInfo>Publisher: {game.publisher}</S.CardGameInfo>
        </S.CardGameInfoContainer>
        <S.CardGameInfoMoreContainer>
          <S.CardGameInfo>Página da loja: </S.CardGameInfo>
          <span>
            <S.CardTextLink href={game.game_url} target="_blank">
              {game.game_url}
            </S.CardTextLink>
          </span>
        </S.CardGameInfoMoreContainer>
      </S.CardContainerLink>
    </S.CardContainer>
  );
}
