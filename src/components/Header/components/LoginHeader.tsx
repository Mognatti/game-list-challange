import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { useState } from "react";
import * as S from "./styles";

export default function LoginHeader() {
  const [{ logOut, user }] = useFirebaseAuth();
  const [showModal, setShowModal] = useState(false);

  function logOutHeader() {
    logOut();
    window.location.reload();
  }
  return (
    <S.LoginContainer>
      <S.ProfileImg
        logged={user ? "true" : "false"}
        src={
          user ? "images/profile_logged_in.png" : "/images/profile_default.png"
        }
        alt="perfil img"
        onClick={() => setShowModal(!showModal)}
      />
      <S.LoginMenuContainer display={showModal}>
        <S.LoginMenuDiv>
          <S.LinkButton to={user ? "/profile" : "/auth"}>
            <S.LoginButton>{user ? "Perfil" : "Entrar"}</S.LoginButton>
          </S.LinkButton>
          <S.LinkButton to="/">
            <S.LoginButton>Lista</S.LoginButton>
          </S.LinkButton>
          {user && (
            <S.LogoutButton onClick={() => logOutHeader()}>Sair</S.LogoutButton>
          )}
        </S.LoginMenuDiv>
      </S.LoginMenuContainer>
    </S.LoginContainer>
  );
}
