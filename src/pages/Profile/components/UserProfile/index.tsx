import { User } from "firebase/auth";
import { useFirebaseAuth } from "../../../../hooks/useFirebaseAuth";
import * as S from "../../styles";
import MiniCard from "../MiniCard";
import useFavoritesListSize from "../../../../hooks/useFavoritesListSize";
import { useState, useEffect } from "react";

export default function UserProfile(user: User) {
  const [showEditNickInput, setShowEditNickInput] = useState(false);
  const [newNick, setNewNick] = useState("");
  const [
    { firebaseUserDocsData, fetchFirebaseUserDocsData, updateUserNickname },
  ] = useFirebaseAuth();
  const favoriteListSize = useFavoritesListSize(firebaseUserDocsData);

  useEffect(() => {
    if (user) fetchFirebaseUserDocsData(user.uid);
  }, []);

  function updateUserNick(newNick: string) {
    updateUserNickname(newNick);
  }
  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.ProfileInfoContainer>
          <S.ProfileImg
            src="images/profile_logged_in.png"
            alt="placeholder profile pic"
          />
          <S.ProfileData>
            <S.NickDiv>
              {showEditNickInput ? (
                <S.ChangeNickInput
                  id="new-nick"
                  type="text"
                  value={newNick}
                  onChange={(e) => setNewNick(e.target.value)}
                />
              ) : (
                <span>{user.displayName}</span>
              )}
              {!showEditNickInput ? (
                <S.EditNickIcon
                  onClick={() => setShowEditNickInput(!showEditNickInput)}
                />
              ) : (
                <>
                  <S.SendChangeNickData onClick={() => updateUserNick(newNick)}>
                    enviar
                  </S.SendChangeNickData>
                  <S.SendChangeNickData
                    onClick={() => setShowEditNickInput(false)}
                  >
                    cancelar
                  </S.SendChangeNickData>
                </>
              )}
            </S.NickDiv>
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
