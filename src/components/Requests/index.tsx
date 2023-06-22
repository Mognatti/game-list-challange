export async function GetData(
  setGameList: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setIsLoading(true);
    const response = await fetch(
      "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
      {
        headers: {
          "dev-email-address": "caiocsm97@gmail.com",
        },
      }
    );
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      throw Error("Falha na requisição");
    }
    setGameList(data);
    setIsLoading(false);
  } catch (error: any) {
    console.log(error);
    console.log("error status: ", error.message);
  }
}
