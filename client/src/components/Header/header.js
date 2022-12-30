import React from "react";
import './header.css'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
    const logout = () => {
        window.localStorage.clear();
        navigate('/');
    }
  return (
       <div className="header-class">
      <div className="header-left">USER ID : 06PPD125</div>
      <div className="header-right" onClick={logout}>Log Out</div>
      </div>
  );
}

export default Header;
