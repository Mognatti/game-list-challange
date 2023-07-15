import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import { useState } from "react";
import * as S from "./styles";
import FirebaseLoader from "./FirebaseLoader";

export default function LoginHeader() {
  const [{ logOut, user, isLoading }] = useFirebaseAuth();
  const [showModal, setShowModal] = useState("false");
  function logOutHeader() {
    logOut();
    window.location.reload();
  }

  return (
    <S.LoginContainer>
      <S.ProfileImg
        logged={user ? "true" : "false"}
        modaldisplay={showModal}
        src={
          user ? "images/profile_logged_in.png" : "/images/profile_default.png"
        }
        alt="perfil img"
        onClick={() => setShowModal(showModal === "true" ? "false" : "true")}
      />
      <S.LoginMenuContainer
        onBlur={() => setShowModal("false")}
        display={showModal}
      >
        <S.LoginMenuDiv>
          <S.LinkButton display={showModal} to={user ? "/profile" : "/auth"}>
            <S.LoginButton>{user ? "Perfil" : "Entrar"}</S.LoginButton>
          </S.LinkButton>
          <S.LinkButton display={showModal} to="/">
            <S.LoginButton>Lista</S.LoginButton>
          </S.LinkButton>
          {user && (
            <S.LogoutButton display={showModal} onClick={() => logOutHeader()}>
              Sair
            </S.LogoutButton>
          )}
        </S.LoginMenuDiv>
      </S.LoginMenuContainer>
    </S.LoginContainer>
  );
}
