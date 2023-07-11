import { User } from "firebase/auth";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import * as S from "../../styles";
import MiniCard from "../MiniCard";

export default function UserProfile(user: User) {
  const [{ firebaseFavorites }] = useFirebaseAuth();

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
              jogos salvos:{" "}
              <span>
                {firebaseFavorites.map((item) => item.favorites.length)}
              </span>
            </div>
          </S.ProfileData>
        </S.ProfileInfoContainer>
      </S.ProfileHeader>
      <S.ListSectionTitle>Favoritos</S.ListSectionTitle>
      <br />
      <S.FavortiesList>
        {firebaseFavorites.map((item) =>
          item.favorites.map((game) => (
            <MiniCard key={game.id} {...game}></MiniCard>
          ))
        )}
      </S.FavortiesList>
    </S.ProfileContainer>
  );
}
