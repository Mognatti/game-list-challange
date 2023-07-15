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
            {user.email}
            <div>
              jogos salvos: <span>{favoriteListSize}</span>
            </div>
          </S.ProfileData>
        </S.ProfileInfoContainer>
      </S.ProfileHeader>
      <S.ListSectionTitle>Favoritos</S.ListSectionTitle>
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
