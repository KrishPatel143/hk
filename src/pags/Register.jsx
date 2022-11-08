import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from '../context/AuthContext';


const Register = () => {
    


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signUp(email, password);
        navigate("/home");
      } catch (err){
        setError(err.message);
      }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">page 1</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="password"onChange={(e) => setPassword(e.target.value)}/>
                    <button>Sign up</button>
                    {error && <span> something is wrong</span>}
                   <p> You do have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
