import React, { useState } from 'react'
import axios from 'axios';

function App() {
  const [file,setfile] = useState('')
  const upload = ()=>{
    // console.log(file)
const formdata = new FormData();
formdata.append('filee',file)
axios.post('http://localhost:8002/upload',formdata,{
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
.then((res)=>{
  console.log(res);
})
    

  }
  return (
    <div>
      <input type="file" onChange={(e)=>{setfile(e.target.files[0])}} />
      <button type='button' onClick={upload}>upload</button>
    </div>
  )
}

export default App
