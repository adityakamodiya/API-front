import React from 'react'
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { useState,useEffect } from 'react'
import { auth } from './Firebase'
import { useNavigate,Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[ud,setud] = useState('')

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           setud(user.uid)
    //           // ...
    //           console.log("uid", uid)
    //         } else {
    //           // User is signed out
    //           // ...
    //           console.log("user is logged out")
    //           navigate('/')
    //         }
    //       });
         
    // }, [])
        

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("uid",user.uid)
            navigate("/form")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    
  return (
    <>
        <div id="wrapper">
            
    <form action="" style={{height:'80%'}}  onSubmit={onLogin}>
        <h1>Login yourself!!!</h1>
        {/* <input type="text" placeholder='name' onChange={e=>{setname(e.target.value)}} /> */}
        <input type="email" placeholder='Email'onChange={e=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password'onChange={e=>{setPassword(e.target.value)}} />
        <button type='submit'>Log in</button>

        <Link to='/Signup'>Register yourself</Link> 
    </form> 
    </div>
    </>
  )
}

export default Login
