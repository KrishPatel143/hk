import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { db, storage } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo"> Name {user.email}</span>
      <button onClick={handleLogout}>Sign out</button>
      <span className="title">Home</span>
     <Link  to="/addcomplaint">
        <button >Addcomplaint</button>
        </Link>
    </div>
  </div>
  );
};

export default Home;