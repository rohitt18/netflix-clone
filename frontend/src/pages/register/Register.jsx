import React, { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef(); // you can use onchange
  let navigate = useNavigate(); // navigate instead of history after react-router-dom v6

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    // setPassword(passwordRef.current.value);
    // setUsername(usernameRef.current.value);
    try {
      await axios.post(`/api/v1/auth/register`, { email, username, password });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button className="loginButton">Sign In</button>
      </div>
      <div className="container">
        <h1>Unlimited Movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
