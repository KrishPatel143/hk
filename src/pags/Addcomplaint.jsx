import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { db } from '../firebase';

const Addcomplaint = () => {
    const [text_1, settext_1] = useState("");
    const [text_2, settext_2] = useState("");
    const [text_3, settext_3] = useState("");
    const [text_4, settext_4] = useState("");
    const [text_5, settext_5] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        await setDoc(doc(db, "complaint", text_1), {
            domy1: text_1,
            domy2: text_2,
            domy3: text_3,
            domy4: text_4,
            domy5: text_5,
          });
        }catch{
            
        }
    }  
  return (
    <div className="formContainer">
            <div className="formWrapper">
        <form
         onSubmit={handleSubmit}
        >
          <input type="text" placeholder="text_1" onChange={(e) => settext_1(e.target.value)}/>
          <input type="text" placeholder="text_2" onChange={(e) => settext_2(e.target.value)}/>
          <input type="text" placeholder="text_3" onChange={(e) => settext_3(e.target.value)}/>
          <input type="text" placeholder="text_4" onChange={(e) => settext_4(e.target.value)}/>
          <input type="text" placeholder="text_5" onChange={(e) => settext_5(e.target.value)}/>
          <button>Sign in</button>
        </form>
    </div>
    </div>
  )
}

export default Addcomplaint
