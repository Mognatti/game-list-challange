import { useState, useEffect } from "react";

export function useFetch() {
  const [gameList, setGameList] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
        if (data.error === "Internal Server Error") {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(
            "O servidor fahou em responder, tente recarregar a página"
          );
          console.log("Erro no servidor");
        }
        if (data.error == 'Invalid email on "dev-email-address" header') {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(
            "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
          );
          console.log("erro no email");
        }
        setGameList(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        throw Error("Tente carregar a página!");
      }
    };
    fetchData();
  }, []);

  return [{ gameList, isLoading, isError, errorMessage }];
}
