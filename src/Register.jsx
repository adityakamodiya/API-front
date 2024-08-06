import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './form.css'
import { auth ,db} from './Firebase'
import { doc,setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate();
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    const Registeruser = async(e)=>{
        e.preventDefault();
        try{
           await createUserWithEmailAndPassword(auth,email,password);
           const user = auth.currentUser
           console.log(user);
           if(user){
            await setDoc(doc(db,"Users",user.uid),{
              email:user.email,
              firstname:name,

            })
           }
           console.log("success");
           alert('register successfull!!')
           navigate('/')
        }
        catch(error){
console.log(error.message);
alert("already registered email")
        }
    }
  return (
    <>
    <div id="wrapper">
    <form action="" style={{height:'80%'}}  onSubmit={Registeruser}>
        <h1>Register yourself!!!</h1>
        <input type="text" placeholder='name' onChange={e=>{setname(e.target.value)}} />
        <input type="email" placeholder='Email'onChange={e=>{setemail(e.target.value)}} />
        <input type="password" placeholder='password'onChange={e=>{setpassword(e.target.value)}} />
        <button type='submit'>Register</button>

    </form>
    </div>
    </>
  )
}

export default Register
