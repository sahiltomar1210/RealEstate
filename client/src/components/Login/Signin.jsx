import React from "react";
import { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(window.localStorage.setItem("authenticated", false));
  const handleSubmit = (e) => {
    e.preventDefault();
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
        if (data.status === "Success") {
          window.localStorage.setItem("authenticated", true);
          window.localStorage.setItem("token", data.token);
          setauthenticated(true)
          navigate("/Dashboard");
        }
        if(data.status === "Failed" && data.message ==="User Not Registered"){
          window.localStorage.setItem("authenticated", false);
          alert("Please Sign Up First")
        }
        else if(data.status === "Failed") {
         alert(`${data.message}`)
         window.localStorage.setItem("authenticated", false);
        }
        else{
          alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
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
         Sign In
        </button>
        <label className="signup" onClick={()=>{navigate("/Signup")}}>Sign Up</label>
      </form>
      <label className="question_label"></label>
      <label className="signup_label">Don't have an account?Sign Up</label>
    </div>
  );
 }
};

export default Signin;
