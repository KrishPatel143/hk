import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase';


const ForgotPasswordPage = () => {
    

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth,email)
          console.log('send successful');
        } catch (err) {
          console.log(err);
        }
      };


    return (    
    <div className="formContainer">
        <div className="formWrapper">
        <span className="logo"> Name</span>
        <span className="title">forgot</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}
        />
            <button>Sent</button>
        </form>
        </div>
    </div>
    );
};

export default ForgotPasswordPage;
