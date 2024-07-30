import React, { useState } from 'react'
  import axios from 'axios';
function GetAll() {
    const[no,set] = useState(5);
    axios.get(`https://server-5a5x.onrender.com/`)
    // axios.get('https://server-5a5x.onrender.com/')
    .then((res)=>console.log(res))

  return (
   <>
   </>
  )
}

export default GetAll
