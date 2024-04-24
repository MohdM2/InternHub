import "./Login.css";
import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SignUpFormContext } from "../../Contexts/SignUpFormContext";

function LoginPage() {
  // const history = useHistory();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("student");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      if (!email || !username || !password || !userType) {
        setErrorMessage("Please fill out all fields");
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
      // Handle sign-up logic here
      if (userType === "student") {
        // Redirect to the student info page after signing up
        navigate("/welcome", {
          state: { userType: userType, username: username },
        });
      } else if (userType === "company") {
        // Redirect to the company info page after signing up
        navigate("/welcome", {
          state: { userType: userType, username: username },
        });
      }
    } else {
      if (!username || !password) {
        setErrorMessage("Please enter both username and password");
        return;
      }
      // Handle login logic here
      console.log("Login");
    }
    // Reset error message if no errors
    setErrorMessage("");
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="login-signup-container">
      <div className="login-container">
        <h2>{isSignUp ? "Sign-Up" : "Log-in"}</h2>

        {isSignUp && (
          <div className="sign-up-as">
            <button className="btn" onClick={() => setUserType("student")}>
              Student
            </button>
            <button className="btn" onClick={() => setUserType("company")}>
              Company
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className={isSignUp ? "" : "input-container-margin"}
              type="text"
              id="username"
              value={username}
              placeholder={`${userType} name`}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          {isSignUp && (
            <div className="input-container">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          )}
          <div className="input-container">
            <input
              className={isSignUp ? "" : "input-container-margin"}
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="signup-login-confirm" type="submit">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p
          className="switch-login-signup"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setErrorMessage("");
          }}
        >
          {isSignUp ? `Already have an account?  ` : `Don't have an account? `}
          <span>{isSignUp ? "Sign in " : "Sign up "}</span>
        </p>
      </div>
      <div className="text-container">
        <div className="text">
          <h1>{isSignUp ? "Hello, Friend!" : "Welcome Back !"}</h1>
          <p>
            {isSignUp
              ? "Start your professional journey by entering a couple of information"
              : "Start where you have stopped by logging in with your personal information"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
