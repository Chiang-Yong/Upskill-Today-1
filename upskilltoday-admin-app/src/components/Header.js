import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import Navbar from "./Navbar";
//import AuthNavbar from "./AuthNavbar";


//const port = 5000;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`http://localhost:5000/user`, {
      credentials: "include",
      
    }).then((response) => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`http://localhost:5000/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const email = userInfo?.email;

  return (
    <header>
     {/*  <Link to="/" className="logo">
       Upskill Today Admin
      </Link>  */} 
      <nav>
        {email && (
          <>
            <Link to="/Admin">Admin</Link>
            <a onClick={logout}>Logout ({email})</a>
          </>
        )}
        {!email && (
          <>
            <Navbar />
            
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
