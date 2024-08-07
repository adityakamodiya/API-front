import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import Form from './Form';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
                 <Route path="/form" element={<Form/>}/>
               <Route path="/signup" element={<Register/>}/>
               <Route path="/" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;