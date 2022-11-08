import React,{  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


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
  
  const [imageUpload, setImageUpload] = useState(null);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const date = new Date().getTime();
    const storageRef = ref(storage, `images/${imageUpload.name + date}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        await setDoc(doc(db, "fileurl", `${date}`), {
          photoURL: downloadURL,
        });
      });
      
    });
  };

  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo"> Name {user.email}</span>
      <button onClick={handleLogout}>Sign out</button>
      <span className="title">Home</span>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
        <button onClick={uploadFile}>upload</button>

    </div>
  </div>
  );
};

export default Home;