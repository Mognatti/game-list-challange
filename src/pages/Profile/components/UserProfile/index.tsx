import { User } from "firebase/auth";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import * as S from "../../styles";
import MiniCard from "../MiniCard";
import useFavoritesListSize from "../../../../hooks/useFavoritesListSize";
import { useEffect } from "react";

export default function UserProfile(user: User) {
  const [{ firebaseUserDocsData, fetchFirebaseUserDocsData }] =
    useFirebaseAuth();
  const favoriteListSize = useFavoritesListSize(firebaseUserDocsData);

  useEffect(() => {
    if (user) fetchFirebaseUserDocsData(user.uid);
  }, []);

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.ProfileInfoContainer>
          <S.ProfileImg
            src="images/profile_logged_in.png"
            alt="placeholder profile pic"
          />
          <S.ProfileData>
            <span>{user.displayName}</span>
            <div>
              Jogos salvos: <span>{favoriteListSize}</span>
            </div>
            <S.ProfileLinkToHome to="/">
              <S.ProfileButtonToHome>Ver Lista Completa</S.ProfileButtonToHome>
            </S.ProfileLinkToHome>
          </S.ProfileData>
        </S.ProfileInfoContainer>
      </S.ProfileHeader>
      <S.TitleContainer>
        <S.ListSectionTitle>Favoritos</S.ListSectionTitle>
      </S.TitleContainer>
      <br />
      <S.FavortiesList>
        {firebaseUserDocsData.map((item) =>
          item.favorites?.map((game) => (
            <MiniCard key={game.id} {...game}></MiniCard>
          ))
        )}
      </S.FavortiesList>
    </S.ProfileContainer>
  );
}
