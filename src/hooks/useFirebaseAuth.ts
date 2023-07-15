import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  User,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { FirebaseFavorite, Game, SignInProps, ratedGames } from "../types";

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(auth.currentUser || null);
  const [userId, setUserId] = useState<string | null | undefined>(null);
  const [firebaseUserDocsData, setFirebaseUserDocsData] = useState<
    FirebaseFavorite[]
  >([]);
  const [firebaseRatedGames, setFirebaseRatedGames] = useState<ratedGames[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserId(user?.uid);
      setIsLoading(false);
    });

    if (userId) {
      fetchFirebaseUserDocsData(userId), fetchRatedGames();
    }
  }, [auth]);

  async function fetchRatedGames() {
    if (userId) {
      const userDocumentRef = doc(db, "user", userId);
      const userSnapshot = await getDoc(userDocumentRef);
      if (userSnapshot.exists()) {
        const userDocData = userSnapshot.data();
        const ratedGamesData = userDocData.ratedGames || [];
        setFirebaseRatedGames(ratedGamesData);
      }
    }
  }

  async function fetchFirebaseUserDocsData(id: string) {
    const userCollectionRef = collection(db, "user");
    const userIdDbQuery = query(userCollectionRef, where("uuid", "==", id));
    const querySnapshot = await getDocs(userIdDbQuery);
    if (querySnapshot) {
      const buffer: any[] = [];
      querySnapshot.forEach((doc) => {
        if (!buffer.includes(doc.data())) {
          buffer.push(doc.data());
        }
      });
      setFirebaseUserDocsData(buffer);
    }
  }

  async function addToFirebaseFavorites(game: Game) {
    if (userId) {
      const userDocumentRef = doc(db, "user", userId);
      await updateDoc(userDocumentRef, {
        favorites: arrayUnion({
          id: game.id,
          title: game.title,
          genre: game.genre,
          game_url: game.game_url,
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
          genre: game.genre,
          game_url: game.game_url,
          thumbnail: game.thumbnail,
        }),
      });
    }
  }
  async function postRating(ratingScore: number | null, gameId: number) {
    if (ratingScore === null || !userId) {
      return;
    }
    if (userId) {
      const userDocumentRef = doc(db, "user", userId);
      const userSnapshot = await getDoc(userDocumentRef);

      if (userSnapshot.exists()) {
        const userDocData = userSnapshot.data();
        const ratedGames: ratedGames[] = userDocData.ratedGames || [];

        const gameIndex = ratedGames.findIndex(
          (game: ratedGames) => game.id === gameId
        );

        if (gameIndex !== -1) {
          ratedGames[gameIndex].score = ratingScore;
          await updateDoc(userDocumentRef, { ratedGames });
        } else {
          await updateDoc(userDocumentRef, {
            ratedGames: arrayUnion({ id: gameId, score: ratingScore }),
          });
        }
      }
    }
  }

  async function createUser({ email, password }: SignInProps) {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setUser(res.user);
        await setDoc(doc(db, "user", res.user.uid), {
          uuid: res.user.uid,
        });
        setIsLoading(false);
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro: ", errorCode, " ", errorMessage);
    }
  }

  async function logIn({ email, password }: SignInProps) {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setUser(res.user);
        setUserId(res.user.uid);
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
      setUser(null);
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
      postRating,
      removeFromFirebaseFavorites,
      fetchFirebaseUserDocsData,
      fetchRatedGames,
      isLoading,
      user,
      firebaseUserDocsData,
      firebaseRatedGames,
    },
  ];
}
