import * as S from "../../styles/StyledComponents";

interface Props {
  errorMessage: string;
}
const oopsMessage = "Ops! Parece que ocorreu um problema...";
const clickMonkeyMessage =
  "Clique no macaquinho operário para que ele tente resolver o problema!";

export default function ErrorPage({ errorMessage }: Props) {
  function reloadPage() {
    window.location.reload();
  }
  return (
    <S.ErrorPageContainer>
      <p>{oopsMessage}</p>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      <S.ReloadPageIcon size="20" onClick={() => reloadPage()} />
      <S.MonkeyFixer
        onClick={() => reloadPage()}
        src="src/assets/error_img.png"
      />
      <p>{clickMonkeyMessage}</p>
    </S.ErrorPageContainer>
  );
}
