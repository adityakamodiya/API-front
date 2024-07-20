import React, { useState } from 'react'
import './form.css'
function form() {
    const [name,setname] = useState('')
    const [location,setlocation] = useState('')
    const [price,setprice] = useState('')
    const [descripition,setdescripition] = useState('')
    const [workingdays,setworkingdays] = useState('')
    const [timings,settimings] = useState('')
    const[images,setimages] = useState('')

    const submit = (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('working_days', workingdays);
        formData.append('timings', timings);
        formData.append('file', file);
        // formData.append('Message', cityName);
    }
  return (
    <>
    <div id="wrapper">
    <form onSubmit={submit}>
    <input type="text"placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
    <textarea name="" value={location}placeholder='location' id="" onChange={e=>setlocation(location)}></textarea>
    <input type="number" value={price} placeholder='price' onChange={e=>setprice(e.target.value)} />
    <input type="text" value={workingdays} placeholder='working days' onChange={e=>setworkingdays(e.target.value)} />
    <input type="text" value={timings} placeholder='timings' onChange={e=>settimings(e.target.value)} />
    <input type="file" value={images} placeholder='file' onChange={e=>e.target.files[0]} />
    <button type='submit'>submit</button>
    </form>
    </div>
    </>
  )
}

export default form
