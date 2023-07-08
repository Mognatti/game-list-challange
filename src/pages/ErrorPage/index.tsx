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
      <S.ErrorMessage>{oopsMessage}</S.ErrorMessage>
      <S.ErrorMainMessage>{errorMessage}</S.ErrorMainMessage>
      <S.ReloadPageIcon size="20" onClick={() => reloadPage()} />
      <S.MonkeyImage
        onClick={() => reloadPage()}
        src="/images/error_img.png"
        alt="monkey_img"
      />
      <S.ErrorMessage>{clickMonkeyMessage}</S.ErrorMessage>
    </S.ErrorPageContainer>
  );
}
