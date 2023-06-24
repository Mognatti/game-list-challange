import * as S from "../../styles/StyledComponents";
import dayjs from "dayjs";
import { Game } from "../../types";

export default function Card(game: Game) {
  const meContrata = [
    `data de lançamento ${dayjs(game.release_date).format("DD/MM/YYYY")}`,
    `Gênero ${game.genre}`,
    `Produtora: ${game.developer}`,
    `Plataformas: ${game.platform}`,
    `Publisher: ${game.publisher}`,
  ];

  return (
    <S.CardContainer>
      <S.CardContainerLink href={game.freetogame_profile_url} target="_blank">
        <S.CardThumb
          src={game.thumbnail}
          alt={`Imagem do jogo ${game.title}`}
        />
        <S.CardTitle>{game.title}</S.CardTitle>
        <S.CardGameInfoContainer>
          {meContrata.map((contrata) => (
            <S.CardGameInfo key={contrata}>{contrata}</S.CardGameInfo>
          ))}
        </S.CardGameInfoContainer>
      </S.CardContainerLink>
    </S.CardContainer>
  );
}
