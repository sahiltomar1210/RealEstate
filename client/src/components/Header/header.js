import React from "react";
import './header.css'
import { useNavigate } from "react-router-dom";
function Header({username}) {
  const name = username;
  const userid = window.localStorage.getItem("userid");
  const navigate = useNavigate();
    const logout = () => {
        window.localStorage.clear();
        navigate('/');
    }
  return (
       <div className="header-class">
      <div className="header-left">USER ID : {userid}</div>
      <div className="header-right" onClick={logout}>{name}</div>
      </div>
  );
}

export default Header;
