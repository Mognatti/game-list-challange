import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import FirebaseLoader from "./FirebaseLoader";
import * as S from "./styles";
export default function Banner() {
  const [{ user, isLoading }] = useFirebaseAuth();
  console.log(`banner: `, isLoading);

  return (
    <S.WelcomeDiv>
      <S.Title>
        Bem vindo{user ? ", " : "!"}
        {user ? (
          <S.UserEmail>{user?.email}</S.UserEmail>
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
