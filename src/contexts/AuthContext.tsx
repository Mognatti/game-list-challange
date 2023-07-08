import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { singupProps } from "../types";
import firebase from "firebase/auth";

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null | any>();
  const value = {
    currentUser,
    signup,
  };

  function signup({ email, password }: singupProps) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
