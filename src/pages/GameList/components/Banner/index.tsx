import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import * as S from "./styles";
export default function Banner() {
  const [{ user }] = useFirebaseAuth();
  const userContent = [
    {
      title: "Escolha seus Favoritos!",
      content:
        "Ao favoritar um jogo, ele ficará salvo na sua conta e você poderá acessá-lo pelo seu perfil. Através do filtro 'Favoritos ❤️' você poderá filtrar os seus jogos salvos, inclusive por gênero ou nome.",
    },
    {
      title: "Avalie sem perdão!",
      content:
        "Além disso, você poderá avaliar os jogos da lista de acordo com seu gosto pessoal. Assim você pode organizar a lista separando os jogos incríveis daqueles que podem ser não tão incríveis assim...",
    },
    {
      title: "Verifique seu perfil!",
      content:
        " Utilize a imagem no canto superior direito para para navegar pelo site. Você poderá acessar o seu perfil, onde apenas os seus jogos preferidos estão listados, além das suas informações pessoais.",
    },
  ];
  return (
    <>
      <S.WelcomeDiv>
        <S.Title>
          Bem vindo{user ? ", " : "!"}
          {user ? (
            <S.UserEmail>{user?.email}</S.UserEmail>
          ) : (
            <S.NotEmail>
              <S.LoginLink to={"/auth"}>Entre</S.LoginLink> para acessar todos
              os recursos
            </S.NotEmail>
          )}
        </S.Title>
      </S.WelcomeDiv>

      <S.Container>
        <S.BannerInfoContainer>
          {user &&
            userContent.map((info) => (
              <S.BannerInfo key={info.title}>
                <S.UserContentTitle>{info.title}</S.UserContentTitle>
                <S.HiddenContent>{info.content}</S.HiddenContent>
              </S.BannerInfo>
            ))}
        </S.BannerInfoContainer>
      </S.Container>
    </>
  );
}
