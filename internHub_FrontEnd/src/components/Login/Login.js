import "./Login.css";
import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";
function LoginPage() {
  // const history = useHistory();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("student");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false); // New state variable for password validation
  const { updateUser } = useUser();
  const handleSubmit = async (event) => {
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
      if (!isPasswordValid) {
        setErrorMessage(
          "Password must contain uppercase letters, numbers, and symbols. @#$%&*"
        );
        return;
      }
      // Handle sign-up logic here
      if (userType === "student") {
        // Redirect to the student info page after signing up
        try {
          await axios.post("http://localhost:8080/students", {
            email: email,
            name: username,
            password: password,
          });
          const user = await axios.post("http://localhost:8080/auth/login", {
            email,
            password,
          });
          updateUser(user.data);
          navigate("/welcome", {
            replace: true,
          });
        } catch (e) {
          setErrorMessage(e.response.data.error);
          return;
        }
      } else if (userType === "company") {
        // Redirect to the company info page after signing up
        try {
          await axios.post("http://localhost:8080/companies", {
            email: email,
            name: username,
            password: password,
          });
          const user = await axios.post("http://localhost:8080/auth/login", {
            email,
            password,
          });
          updateUser(user.data);
          navigate("/welcome", {
            replace: true,
          });
        } catch (e) {
          setErrorMessage(e.response.data.error);
          return;
        }
      }
    } else {
      if (!email || !password) {
        setErrorMessage("Please enter both username and password");
        return;
      }
      try {
        const user = await axios.post("http://localhost:8080/auth/login", {
          email,
          password,
        });
        updateUser(user.data);
        navigate("/welcome", {
          replace: true,
        });
      } catch (e) {
        setErrorMessage(e.response.data.error);
        return;
      }
    }
    // Reset error message if no errors
    setErrorMessage("");
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    // Validate password format
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
    const isUppercaseValid = uppercaseRegex.test(newPassword);

    const isNumberValid = numberRegex.test(newPassword);
    const isSymbolValid = symbolRegex.test(newPassword);

    setIsPasswordValid(isUppercaseValid && isNumberValid && isSymbolValid);
  };
  return (
    <div className="login-signup-container">
      <div className="login-container">
        <h2>{isSignUp ? "Sign-Up" : "Log-in"}</h2>

        {isSignUp && (
          <div className="sign-up-as">
            <button
              className={userType == "student" ? " btn active-blue-btn" : "btn"}
              onClick={() => setUserType("student")}
            >
              Student
            </button>
            <button className="btn" onClick={() => setUserType("company")}>
              Company
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
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
          )}

          <div className="input-container">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              className={isSignUp ? "" : "input-container-margin"}
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
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
