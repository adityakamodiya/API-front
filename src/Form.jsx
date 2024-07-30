
import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

function Form() {
    const [name, setName] = useState ('');
    const [location, setLocation] = useState('');
    const [des, setdes] = useState('');
    const [adultFees, setadultFees] = useState('');
    const [childFees, setchildFees] = useState('');
    const [starttime, setstarttime] = useState('');
    const [endtime, setendtime] = useState('');
    const [image1, setimage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('description', des);
        formData.append('adultFees', adultFees);
        formData.append('childFees', childFees);
        formData.append('starttime', starttime);
        formData.append('endtime', endtime);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);


        // console.log(name,location,price,timings,Fees)
        // https://server-5a5x.onrender.com
        // console.log(image1)
        axios.post('https://server-5a5x.onrender.com/send',formData, {
            
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            console.log(res);
            alert('successful')
            window.location.reload();
        })
        .catch((error) => {
            console.error("There was an error uploading the files!", error);
        });
    };
    function disable(e){
        e.target.color = 'brown'
        // e.target.disabled = true;
    }

    return (<>
        <div id="wrapper">  
            <form onSubmit={submit}>
            <a href="#">go to results</a>   
                <input type="text" required placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea value={location} required placeholder='location' onChange={(e) => setLocation(e.target.value)}></textarea>
                <input type="text" value={des} required placeholder='descripition' onChange={(e) => setdes(e.target.value)} />
                <input type="number" name="adultfees" required placeholder="adult entry fees" id="adultfees" value={adultFees} onChange={(e) => setadultFees(e.target.value)}   />
        <input type="number" name="childfees"required placeholder="child entry fees" id="childfees"value={childFees} onChange={(e) => setchildFees(e.target.value)} />
                <input type="time" name="starttime"required placeholder="start time" id="starttime"value={starttime} onChange={(e) => setstarttime(e.target.value)}  />
                <input type="time" name="endtime" required placeholder="end time" id="endtime" value={endtime} onChange={(e) => setendtime(e.target.value)} />             
                   <input  className='file'required type="file" onChange={(e) => {setimage1(e.target.files[0])}} />
                <input type="file"required onChange={(e) => setImage2(e.target.files[0])} />
                <input type="file"required onChange={(e) => setImage3(e.target.files[0])} />
                <button type='submit'required onClick={(e)=>{disable(e)}}>submit</button>
            </form>
            
        </div>
                
                </>
    );
    }
    
export default Form;
