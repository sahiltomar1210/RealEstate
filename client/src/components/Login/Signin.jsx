import React from "react";
import { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [userid, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

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
            setUserID(e.target.value);
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
        <label className="signup">Sign Up</label>
      </form>
      <label className="question_label">Don't have an account?</label>
      <label className="signup_label">Sign Up</label>
    </div>
  );
};

export default Signin;
