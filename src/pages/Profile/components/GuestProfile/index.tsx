import { Link } from "react-router-dom";
import * as S from "../../styles";

export default function GuestProfile() {
  return (
    <S.ProfileContainer>
      <p>Você precisa estar logado para ver o seu perfil!</p>
      <button>
        <Link to="/auth">Fazer login!</Link>
      </button>
      <button>
        <Link to="/"> Voltar </Link>
      </button>
    </S.ProfileContainer>
  );
}
