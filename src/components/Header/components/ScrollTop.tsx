import * as S from "./styles";
export default function ScrollTop() {
  function goTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return <S.ArrowUpIcon onClick={() => goTop()} size="20" />;
}
