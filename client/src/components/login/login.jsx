import './Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const token = window.localStorage.getItem("token");
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
                    alert("Please Sign Up First")
                  }
                  else if(data.status === "Failed") {
                   alert(`${data.message}`)
                  }
                  else{
                    alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
                  }
            });

    };
    if(token != null)
  {  
    
  }else{
    return (
        <div className="main">
        <div className="auth-form-container">
            <h2>Logo</h2>
            <p>Enter your credentials to access your account</p>
            <form className="login-form" onSubmit={handleSubmit} autoComplete='off'>
                <label htmlFor="email"></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="User ID" id="email" name="email" />
                <label htmlFor="password"></label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button>Log In</button>
                <button className="link-btn" onClick={()=>navigate("/SignUp")}>Don't have an account? Register</button>
            </form>    
        </div>
        </div>
    )
  }
}
