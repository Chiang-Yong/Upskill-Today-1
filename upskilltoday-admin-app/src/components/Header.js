import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

//const port = 5000;

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    fetch(`https://backend-rust-three.vercel.app/user`, {
      credentials: "include",
      
    }).then((response) => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`https://backend-rust-three.vercel.app/logout`, {
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
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
