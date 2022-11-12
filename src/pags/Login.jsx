import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Name</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}
        />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <p><Link to="/forgotpassword">Forgot Password</Link></p>+
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;