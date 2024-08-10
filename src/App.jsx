import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import Form from './Form';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [ud, setUd] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUd(uid);
        console.log("uid", uid);
        // alert(user.email)
      } else {
        setUd(''); // Clear the user ID if user is logged out
        console.log("user is logged out");
      }
    });
  }, []);

  return (
  <Router>
      <Routes>
        <Route path="/" element={ud?<Navigate to="/form" />  :<Login />} />
        <Route path="/form" element={ud?<Navigate to="/form" />  :<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<Navigate to="/" />} /> {/* Redirect to home for undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
