import React from 'react'
  import axios from 'axios';
function GetAll() {
    axios.get('https://server-5a5x.onrender.com/')
    .then((res)=>console.log(res))

  return (
   <>
   </>
  )
}

export default GetAll
