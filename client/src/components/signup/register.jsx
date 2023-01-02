import './Register.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
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
                if (data.status === "Success") {
                    alert("Registeration Successfull");
                    navigate("/");
                }
                if (data.status === "Failed") {
                    alert(`${data.message}`);
                }
                if (data.errors) {
                    const da = data.errors;
                    alert(`${da[0].param} ${da[0].msg}`)
                }
            });

    };
    return (
        <div className="main">
        <div className="auth-form-container">
            <h2>Logo</h2>
            <p>Create New Account</p>
            <form className="register-form" onSubmit={handleSubmit} autoComplete='off'>
                <label className='sign-label' htmlFor="email"></label>
                <input className='sign-input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Mail ID" id="email" name="email" />
                <label className='sign-label' htmlFor="password"></label>
                <input className='sign-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button className='login-button'>Sign Up</button>
                <button className="link-btn" onClick={()=>navigate("/")}>Sign In</button>
            </form>
        </div>
        </div>
    )
}
