import { useEffect, useState } from "react";
import * as S from "../../styles/StyledComponents";
import ScrollTop from "./ScrollTop";

const headerTitle = "Projeto de Estágio Frontend React - Caio Mognatti";
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
          <span>{headerTitle}</span>
        </S.HeaderListItem>
        {showButton && (
          <S.HeaderListItem>
            <ScrollTop />
          </S.HeaderListItem>
        )}
      </S.HeaderList>
    </S.HeaderContainer>
  );
}
