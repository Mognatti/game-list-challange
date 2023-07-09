import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { SignInProps } from "../types";

export default function useLoggedIn() {
  const [user, setUser] = useState(auth.currentUser);
  const [isCreating, setIsCreating] = useState(false);

  async function signIn({ email, password }: SignInProps) {
    try {
      setIsCreating(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        setIsCreating(false);
        setUser(res.user);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }

  return [{ signIn, signInWithGoogle, logOut, isCreating, user }];
}
