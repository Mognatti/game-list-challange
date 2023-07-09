import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { SignInProps } from "../types";

export function useFirebaseAuth() {
  const [user, setUser] = useState(auth.currentUser);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: SignInProps) {
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

  async function signInWithGoogle() {
    setIsLoading(true);
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) {
        setIsLoading(false);
        setUser(res.user);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logIn({ email, password }: SignInProps) {
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setIsLoading(false);
        setUser(res.user);
        console.log(user);
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
    } catch (error) {
      console.error(error);
    }
  }

  return [{ signIn, signInWithGoogle, logIn, logOut, isLoading, user }];
}
