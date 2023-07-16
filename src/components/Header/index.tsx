import * as S from "./styles";
import LoginHeader from "./components/LoginHeader";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
const headerTitle = "My Game List";
export default function Header() {
  const [{ isLoading }] = useFirebaseAuth();

  if (isLoading) return;

  return (
    <S.HeaderContainer>
      <S.HeaderList>
        <S.HeaderListItem>
          <S.HeaderTitle>{headerTitle}</S.HeaderTitle>
        </S.HeaderListItem>
      </S.HeaderList>
      <LoginHeader />
    </S.HeaderContainer>
  );
}
