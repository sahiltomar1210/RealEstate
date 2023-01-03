import React, { useEffect, useState } from "react";
import './header.css'
import { useNavigate } from "react-router-dom";
function Header() {
  const name = window.localStorage.getItem("username");
  const userid = window.localStorage.getItem("userid");
  const navigate = useNavigate();
  const [username,setUsername] =useState(name) ;
  const handleChange = (event) => {
    setUsername(event.target.value)
  };
  useEffect(()=>{
    if(username ==="Logout"){
      window.localStorage.clear();
      navigate("/");
    }
  },[username])
  return (
       <div className="header-class">
      <div className="header-left">USER ID : {userid}</div>
      <div className="header-right" >
         <select
              className="drop-down"
              name="username"
              value={username}
              onChange={handleChange}
            >
              <option default value="username">{username}</option>
              <option value="Logout" >Log Out</option>
            </select>
            </div>  
      </div>
  );
}

export default Header;
