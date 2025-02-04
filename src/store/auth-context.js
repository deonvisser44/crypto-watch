import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userUID, setUserUID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password); 
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      if(user){
        setUserUID(user.uid)
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      
    })

    return unsubscribe
  }, [])

  const value = {currentUser, login, signup, logout, userUID, isLoggedIn};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
