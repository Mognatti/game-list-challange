import { PacmanLoader } from "react-spinners";
import { pallete } from "../../../../styles/styleVariables";
import * as S from "./styles";

export default function FirebaseLoader() {
  return (
    <S.LoaderContainer>
      <PacmanLoader size="40px" color={pallete.yellow}></PacmanLoader>
    </S.LoaderContainer>
  );
}
