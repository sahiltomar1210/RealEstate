import React from "react";
import { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "Sucess" || data.status ==="failed") {
          window.localStorage.setItem("authenticated", true);
          window.localStorage.setItem("token", data.token);
          setauthenticated(true)
          navigate("/Dashboard");
        }
      });
  };

  if(authenticated)
  {
    navigate("/Dashboard");
  }else{
  return (
    <div className="signin_page">
      <form className="signin_form" onSubmit={handleSubmit}>
        <label className="logo">Logo</label>
        <label className="label1">
          Enter your credentials to access your account
        </label>
        <input
          placeholder="User ID"
          className="userid"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          className="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="signin" type="submit">
         Signin
        </button>
        <label className="signup">Sign Up</label>
      </form>
      <label className="question_label"></label>
      <label className="signup_label">Don't have an account?Sign Up</label>
    </div>
  );
 }
};

export default Signin;
