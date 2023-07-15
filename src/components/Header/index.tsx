import * as S from "./styles";
import ScrollTop from "./components/ScrollTop";
import LoginHeader from "./components/LoginHeader";
import useWindowSize from "../../hooks/useWindowSize";

const headerTitle = "My Game List";
export default function Header() {
  const [{ showScrollToTopButton }] = useWindowSize();

  return (
    <S.HeaderContainer>
      <S.HeaderList>
        <S.HeaderListItem>
          <S.HeaderTitle>{headerTitle}</S.HeaderTitle>
        </S.HeaderListItem>
        {showScrollToTopButton && (
          <S.HeaderListItem>
            <ScrollTop />
          </S.HeaderListItem>
        )}
      </S.HeaderList>
      <LoginHeader />
    </S.HeaderContainer>
  );
}
