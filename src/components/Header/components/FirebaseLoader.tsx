import { PacmanLoader } from "react-spinners";
import * as S from "./styles";
import { pallete } from "../../../styles/styleVariables";
export default function FirebaseLoader() {
  return (
    <S.FirebaseLoaderContainer>
      <PacmanLoader size="15px" color={pallete.yellow}></PacmanLoader>
    </S.FirebaseLoaderContainer>
  );
}
