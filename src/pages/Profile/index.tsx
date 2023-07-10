import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import * as S from "./styles";
import Header from "../../components/Header";

export default function Profile() {
  const [{ user }] = useFirebaseAuth();
  if (user) {
    return (
      <>
        <Header />
        <S.ProfileContainer>
          <p>Olá, {user?.email} </p>
          <Link to="/">
            <S.NavigateListButton>Ver lista de jogos</S.NavigateListButton>
          </Link>
        </S.ProfileContainer>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <S.ProfileContainer>
          <p>Você precisa estar logado para ver o seu perfil!</p>
          <button>
            <Link to="/auth">Cadastrar agora!</Link>
          </button>
          <button>
            <Link to="/"> Voltar </Link>
          </button>
        </S.ProfileContainer>
      </>
    );
  }
}
