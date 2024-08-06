import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from './Firebase'
import { useNavigate,Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const Loginuser =async (e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("user login seccessfully")
            alert("user login seccessfully")
            navigate('/form')
            
        }
        catch(er){
            console.log('error')
            alert('invalid')
        }

    }

    
  return (
    <>
        <div id="wrapper">
            
    <form action="" style={{height:'80%'}}  onSubmit={Loginuser}>
        <h1>Login yourself!!!</h1>
        {/* <input type="text" placeholder='name' onChange={e=>{setname(e.target.value)}} /> */}
        <input type="email" placeholder='Email'onChange={e=>{setemail(e.target.value)}} />
        <input type="password" placeholder='password'onChange={e=>{setpassword(e.target.value)}} />
        <button type='submit'>Log in</button>

        <Link to='/Register user'>Register yourself</Link> 
    </form> 
    </div>
    </>
  )
}

export default Login
