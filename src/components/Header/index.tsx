import { useEffect, useState } from "react";
import * as S from "./styles";
import ScrollTop from "./components/ScrollTop";
import LoginHeader from "./components/LoginHeader";

const headerTitle = "Projeto de Estágio Frontend React";
const showButtonHeight = 500;

export default function Header() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > showButtonHeight
        ? setShowButton(true)
        : setShowButton(false)
    );
  }, []);

  return (
    <S.HeaderContainer>
      <S.HeaderList>
        <S.HeaderListItem>
          <S.HeaderTitle>{headerTitle}</S.HeaderTitle>
        </S.HeaderListItem>
        {showButton && (
          <S.HeaderListItem>
            <ScrollTop />
          </S.HeaderListItem>
        )}
      </S.HeaderList>
      <LoginHeader />
    </S.HeaderContainer>
  );
}
