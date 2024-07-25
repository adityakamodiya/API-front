import React from 'react'
  import axios from 'axios';
function GetAll() {
    axios.get('http://localhost:8002')
    .then((res)=>console.log(res))

  return (
   <>
   </>
  )
}

export default GetAll
