import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import './form.css'
import { auth ,db} from './Firebase'
import { doc,setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          try{
             auth.signOut();
            navigate('/')
        }
        catch(error){
            console.log(error)
        }

          // navigate("/")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }
  return (
    <>
    <div id="wrapper">
    <form action="" style={{height:'80%'}}  onSubmit={onSubmit}>
        <h1>Register yourself!!!</h1>
        {/* <input type="text" placeholder='name' onChange={e=>{setname(e.target.value)}} /> */}
        <input type="email" placeholder='Email'onChange={e=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password'onChange={e=>{setPassword(e.target.value)}} />
        <button type='submit'>Register</button>

    </form>
    </div>
    </>
  )
}

export default Register
