import React from "react";
import './header.css'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
  return (
    <nav>
      <div class="left">USER ID : 06PPD125</div>
      <div class="right" onClick={logout}>Log Out</div>
    </nav>
  );
}

export default Header;
