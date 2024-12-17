import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from "../Firebase";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    console.log(email);
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth)
  }
  function googleSignin() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
    });
    return () => {
      unsubscribe();
    }
  }, [])
  return <userAuthContext.Provider
    value={{ user, signup, login, logout, googleSignin }}>
    {children}
  </userAuthContext.Provider>
}

export function useUserAuth() {
  return useContext(userAuthContext)
}
