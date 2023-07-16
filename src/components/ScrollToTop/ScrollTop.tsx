import useWindowSize from "../../hooks/useWindowSize";
import * as S from "../Header/components/styles";
export default function ScrollTop() {
  const [{ showScrollToTopButton }] = useWindowSize();

  function goTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    showScrollToTopButton && <S.ArrowUpIcon onClick={() => goTop()} size="30" />
  );
}
