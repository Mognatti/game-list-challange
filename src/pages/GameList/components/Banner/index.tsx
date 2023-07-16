import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import { pallete } from "../../../../styles/styleVariables";
import * as S from "./styles";
import { PacmanLoader } from "react-spinners";
export default function Banner() {
  const [{ user, isLoading }] = useFirebaseAuth();

  if (isLoading)
    return (
      <S.LoaderContainer>
        <PacmanLoader color={pallete.yellow}></PacmanLoader>
      </S.LoaderContainer>
    );

  return (
    <S.WelcomeDiv>
      <S.Title>
        Bem vindo{user ? ", " : "!"}
        {user ? (
          <S.UserEmail>
            <S.LoginLink to="/profile">{user?.displayName}</S.LoginLink>
          </S.UserEmail>
        ) : (
          <S.NotEmail>
            <S.LoginLink to={"/auth"}>Entre</S.LoginLink> para acessar todos os
            recursos
          </S.NotEmail>
        )}
      </S.Title>
    </S.WelcomeDiv>
  );
}
