import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const isAuth = async () => {
      try {
       // const res = await Axios.get("http://localhost:5000/login", {
          const res = await Axios.get("https://backend-rust-three.vercel.app/login", {
          withCredentials: true,
        });
        setUser(res.data);
      //  console.log ("Authenticated User's data: "+ res.data)
      } catch (error) {
        setUser(null);
      }
    };
    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user}}>
      {console.log("AuthContext Provider auth: " + auth + "  user: " + user)}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
