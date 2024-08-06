import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Form from './Form'
import GetAll from './GetAll'
import { auth } from './Firebase'
import Register from './Register'
import Login from './Login'
function App() {
const [ user,setuser] = useState('')
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    setuser(user)
    // console.log(user.email)
    localStorage.setItem('Uemail',user.email)
    // console.log(localStorage.getItem('Uemail'))
  })
},[])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/form'element={ (localStorage.getItem('Uemail'))?<Form/>: <Navigate to='/' />}></Route>
      <Route path='/Register user'element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
