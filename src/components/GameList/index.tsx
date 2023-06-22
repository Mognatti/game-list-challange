import * as S from "../../styles/StyledComponents";
import useFetch from "../../Hooks/useFetch";

export default function GameList() {
  const [{ data, isLoading, isError }]: any = useFetch(`data/`, []);
  if (isLoading) return <p>Carreagndo dados...</p>;

  return (
    <S.GameList>
      {data?.map((game: any) => {
        return (
          <S.GameItem key={game.id}>{JSON.stringify(game, null, 2)}</S.GameItem>
        );
      })}
    </S.GameList>
  );
}
