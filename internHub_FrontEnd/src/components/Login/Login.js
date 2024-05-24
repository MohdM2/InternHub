import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
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
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, updateUser } = useUser();
  function showLoader() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }
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
      if (userType === "student" && !validateStudentName(username)) {
        setErrorMessage(
          "Student name must contain two parts separated by a space"
        );
        return;
      }
      if (userType === "student") {
        // Handle sign-up logic here
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
          while (loading);
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
        if (user.data.type == "student")
          navigate(profileIsComplete(user.data) ? "/studentHome" : "/welcome", {
            replace: true,
          });
        else
          navigate(profileIsComplete(user.data) ? "/companyHome" : "/welcome", {
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
  function validateStudentName(name) {
    const re = /^[A-Za-z]+\s[A-Za-z]+$/;
    return re.test(name);
  }
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

  function profileIsComplete(user) {
    if (user.type == "student")
      return (
        user.data.firstName &&
        user.data.lastName &&
        user.data.email &&
        user.data.phone &&
        user.data.bio &&
        user.data.university &&
        user.data.major &&
        user.data.educationStartDate &&
        user.data.educationEndDate &&
        user.data.gpa &&
        user.data.skills.length >= 3 &&
        user.data.courses.length >= 1 &&
        user.data.cv
      );
    else
      return (
        user.data.name &&
        user.data.numberOfEmployees &&
        user.data.bio &&
        user.data.email &&
        user.data.phone &&
        user.data.address &&
        user.data.country &&
        user.data.city &&
        user.data.logo &&
        user.data.speciality
      );
  }
  return (
    <div className="login-signup-container">
      {loading ? (
        <ClimbingBoxLoader
          color="white"
          loading={true}
          speedMultiplier={2}
          size={20}
        />
      ) : (
        <>
          {" "}
          <div className="login-container">
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

            {isSignUp && (
              <div className="sign-up-as">
                <button
                  className={userType == "student" ? "btn active" : "btn"}
                  onClick={() => setUserType("student")}
                >
                  Student
                </button>
                <button
                  className={userType == "company" ? "btn active" : "btn"}
                  onClick={() => setUserType("company")}
                >
                  Company
                </button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              {isSignUp ? (
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
              ) : (
                ""
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
              {isSignUp
                ? `Already have an account?  `
                : `Don't have an account? `}
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
        </>
      )}
    </div>
  );
}

export default LoginPage;
