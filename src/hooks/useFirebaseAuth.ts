import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { SignInProps } from "../types";

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null | undefined>(null);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function checkCurrentUser() {
      if (auth.currentUser !== null) {
        setUser(auth.currentUser);
        setUserId(user?.uid);
      }
    }

    async function queryData(id: string) {
      const userRef = collection(db, "user");
      const q = query(userRef, where("uuid", "==", id));
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        const buffer: any[] = [];
        querySnapshot.forEach((doc) => {
          if (!buffer.includes(doc)) {
            buffer.push(doc.data());
          }
        });
        setFavorites(buffer);
      }
    }
    checkCurrentUser();
    if (userId) queryData(userId);
  }, [user, userId]);

  async function createUser({ email, password }: SignInProps) {
    try {
      setIsLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setIsLoading(false);
        setUser(res.user);
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

  console.log("user>", user, "favorites:", favorites);

  return [{ createUser, logIn, logOut, isLoading, user, favorites }];
}
