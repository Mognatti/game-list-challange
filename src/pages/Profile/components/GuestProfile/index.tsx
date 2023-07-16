import * as S from "../../styles";

export default function GuestProfile() {
  return (
    <S.GuestContainer>
      <S.GuestTitle>
        Você precisa estar logado para ver o seu perfil!
      </S.GuestTitle>
      <S.GuestButtonList>
        <S.GuestLink to="/auth">
          <S.GuestButton>Fazer login</S.GuestButton>
        </S.GuestLink>
        <S.GuestLink to="/">
          <S.GuestButton>Voltar para a lista</S.GuestButton>
        </S.GuestLink>
      </S.GuestButtonList>
    </S.GuestContainer>
  );
}
