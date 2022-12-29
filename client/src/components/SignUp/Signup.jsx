import React from "react";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch("http://localhost:8000/users/register", {
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
        if (data.status === "Success" ) {
            alert("Registeration Successfull");
          }
          if(data.status ==="Failed"){
            alert(`${data.message}`);
          }
         if(data.errors){
             const da = data.errors;
             alert(`${da[0].param} ${da[0].msg}`)
         } 
      });
    
  };
  return (
    <div className="signup_page">
      <form className="signup_form" onSubmit={handleSubmit}>
        <label className="logo">Logo</label>
        <label className="label1">Create New Account</label>
        <input
          className="email"
          type="text"
          placeholder="Mail ID"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
        
        <button className="sign_up_button" type="submit">
          Sign up
        </button>
      </form>
      <label className="sign_in_label">Sign in</label>
    </div>
  );
};

export default Signup;
