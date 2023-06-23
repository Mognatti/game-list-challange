import { useState, useEffect } from "react";
import { Game } from "../types";

export function useFetch() {
  const [gameList, setGameList] = useState<Game[]>();
  const [genreList, setGenreList] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const error500Range = [500, 502, 503, 504, 507, 508, 509];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
          {
            headers: {
              "dev-email-address": "caiocsm97@gmail.com",
            },
          }
        );
        const data = await response.json();

        if (response.status === 200) {
          setGameList(data);
          setIsLoading(false);
          return [{ gameList, isLoading }];
        }

        if (error500Range.includes(response.status)) {
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(
            "O servidor fahou em responder, tente recarregar a página"
          );
          console.log("Erro interno do servidor");
          console.log("Resposta da requisição: ", response);
          return [{ isLoading, isError, errorMessage }];
        }

        if (!error500Range.includes(response.status)) {
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(
            "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
          );
          console.log("Erro interno do servidor");
          console.log("Retorno: ", response);
          return [{ isLoading, isError, errorMessage }];
        }

        if (data.error == 'Invalid email on "dev-email-address" header') {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(
            "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
          );
          console.log("erro no email");
          return [{ isLoading, isError, errorMessage }];
        }
      } catch (error) {
        console.log(error);
        throw Error("Tente carregar a página!");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (gameList) {
      const buffer: string[] = [];
      gameList.forEach((game: Game) => {
        if (!buffer.includes(game.genre)) {
          buffer.push(game.genre);
        }
      });
      setGenreList(buffer);
    }
  }, [gameList]);

  return [{ gameList, genreList, isLoading, isError, errorMessage }];
}
