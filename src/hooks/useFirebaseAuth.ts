import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { FirebaseFavorite, Game, SignInProps } from "../types";

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null | undefined>(null);
  const [firebaseFavorites, setFirebaseFavorites] = useState<
    FirebaseFavorite[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function checkCurrentUser() {
      if (auth.currentUser !== null) {
        setUser(auth.currentUser);
        setUserId(user?.uid);
      }
    }
    async function queryData(id: string) {
      const userCollectionRef = collection(db, "user");
      const userIdDbQuery = query(userCollectionRef, where("uuid", "==", id));
      const querySnapshot = await getDocs(userIdDbQuery);
      if (querySnapshot) {
        const buffer: any[] = [];
        querySnapshot.forEach((doc) => {
          if (!buffer.includes(doc)) {
            buffer.push(doc.data());
          }
        });
        setFirebaseFavorites(buffer);
      }
    }
    checkCurrentUser();
    if (userId) queryData(userId);
  }, [user, userId]);

  async function addToFirebaseFavorites(game: Game) {
    if (userId) {
      const userDocumentRef = doc(db, "user", userId);
      await updateDoc(userDocumentRef, {
        favorites: arrayUnion({
          id: game.id,
          title: game.title,
          developer: game.developer,
          freetogame_profile_url: game.freetogame_profile_url,
          game_url: game.game_url,
          genre: game.genre,
          platform: game.platform,
          publisher: game.publisher,
          release_date: game.release_date,
          short_description: game.short_description,
          thumbnail: game.thumbnail,
        }),
      });
    }
  }

  async function removeFromFirebaseFavorites(game: Game) {
    if (userId) {
      const userDocumentRef = doc(db, "user", userId);
      await updateDoc(userDocumentRef, {
        favorites: arrayRemove({
          id: game.id,
          title: game.title,
          developer: game.developer,
          freetogame_profile_url: game.freetogame_profile_url,
          game_url: game.game_url,
          genre: game.genre,
          platform: game.platform,
          publisher: game.publisher,
          release_date: game.release_date,
          short_description: game.short_description,
          thumbnail: game.thumbnail,
        }),
      });
    }
  }

  async function createUser({ email, password }: SignInProps) {
    try {
      setIsLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setUser(res.user);
        await setDoc(doc(db, "user", userId!), {
          favorites: [{}],
          uuid: userId,
        });
        setIsLoading(false);
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro: ", errorCode, " ", errorMessage);
      setIsLoading(false);
    }
  }

  async function logIn({ email, password }: SignInProps) {
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setUser(res.user);
        setIsLoading(false);
      }
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return [
    {
      createUser,
      logIn,
      logOut,
      addToFirebaseFavorites,
      removeFromFirebaseFavorites,
      isLoading,
      user,
      firebaseFavorites,
    },
  ];
}
