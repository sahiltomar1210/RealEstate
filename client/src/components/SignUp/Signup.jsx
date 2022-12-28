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
            (e) => setPassword(e.target.value);
          }}
        />
        <input
          className="confirm_password"
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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
