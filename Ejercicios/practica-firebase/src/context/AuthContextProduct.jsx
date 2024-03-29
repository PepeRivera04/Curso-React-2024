import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userFirebase, setUserFirebase] = useState(null);

  const signInFirebase = (userData) => {
    setUserFirebase(userData);
  };

  const signOutFirebase = () => {
    setUserFirebase(null);
  };

  return (
    <AuthContext.Provider
      value={{ userFirebase, signInFirebase, signOutFirebase }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProduct = () => {
  return useContext(AuthContext);
};
