import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

function Form() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [des, setdes] = useState('');
    const [Fees, setFees] = useState('');
    const [timings, setTimings] = useState('');
    const [image1, setimage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('descripition', des);
        formData.append('Fees', Fees);
        formData.append('timings', timings);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);


        console.log(name,location,price,timings,Fees)
        // console.log(image1)
        axios.post('http://localhost:8002/send',formData, {
            
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error("There was an error uploading the files!", error);
        });
    };

    return (
        <div id="wrapper">  
            <form onSubmit={submit}>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea value={location} placeholder='location' onChange={(e) => setLocation(e.target.value)}></textarea>
                <input type="text" value={price} placeholder='descripition' onChange={(e) => setdes(e.target.value)} />
                <input type="text" value={Fees} placeholder='feessss' onChange={(e) => setFees(e.target.value)} />
                <input type="text" value={timings} placeholder='timings' onChange={(e) => setTimings(e.target.value)} />
                <input  className='file' type="file" onChange={(e) => {setimage1(e.target.files[0])}} />
                <input type="file" onChange={(e) => setImage2(e.target.files[0])} />
                <input type="file" onChange={(e) => setImage3(e.target.files[0])} />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Form;
