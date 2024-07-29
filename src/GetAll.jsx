import React, { useState } from 'react'
  import axios from 'axios';
function GetAll() {
<<<<<<< HEAD
    const[no,set] = useState(5);
    axios.get(`https://server-5a5x.onrender.com/`)
=======
    axios.get('https://server-5a5x.onrender.com/')
>>>>>>> 3e5f2134c36c246051648c435e788b0c99ba760a
    .then((res)=>console.log(res))

  return (
   <>
   </>
  )
}

export default GetAll
