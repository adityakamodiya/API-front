import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
import { auth,db } from './Firebase'
import { doc,setDoc } from 'firebase/firestore'
import './form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    
    
    const[ud,setud] = useState('')
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setud(user.uid);

            console.log("uid", user.uid);
          } else {
            console.log("user is logged out");
            navigate('/');
          }
        });
    
        return () => unsubscribe(); // Clean up the subscription
      }, [navigate]);

    // const navigate = useNavigate();
 


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
        console.log('running')
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
            alert('data has been added  successfully!!!')
            window.location.reload();
        })
        .catch((error) => {
            console.error("There was an error uploading the files!", error);
        });
    };
    

    const Logout = async()=>{
        try{
            await auth.signOut();
        localStorage.removeItem('uid')
        window.location.reload()    
        navigate('/')

        }
        catch(error){
            console.log(error)
        }
    }
            
    return (<>
    { (ud && localStorage.getItem('uid'))?
        <div id="wrapper">  
            <form onSubmit={submit}>
            {/* <a href="#">go to results</a>    */}
            <h1>Add your favourate waterpark </h1>
                <input type="text" required placeholder='resort name' value={name} onChange={(e) => setName(e.target.value)} />
                <textarea value={location} required placeholder='location' onChange={(e) => setLocation(e.target.value)}></textarea>
                <input type="text" value={des} required placeholder='descripition' onChange={(e) => setdes(e.target.value)} />
                <input type="number" name="adultfees" required placeholder="adult entry fees" id="adultfees" value={adultFees} onChange={(e) => setadultFees(e.target.value)}   />
        <input type="number" name="childfees"required placeholder="child entry fees" id="childfees"value={childFees} onChange={(e) => setchildFees(e.target.value)} />

        <div className="timings">
               <label htmlFor="">start time</label> <input type="time" name="starttime"required placeholder="start time" id="starttime"value={starttime} onChange={(e) => setstarttime(e.target.value)}  />
               </div>
               <div className="timings">
               <label htmlFor="">End time</label>   <input type="time" name="endtime" required placeholder="end time" id="endtime" value={endtime} onChange={(e) => setendtime(e.target.value)} />    
               </div>
                   <input  className='file'required type="file" onChange={(e) => {setimage1(e.target.files[0])}} />
                <input className='file' type="file"required onChange={(e) => setImage2(e.target.files[0])} />
                <input className='file' type="file"required onChange={(e) => setImage3(e.target.files[0])} />
                <button  type='submit'required onClick={e=> setInterval(() => {
                            
                    e.target.disabled = 'true'}, 2000)} >submit</button>
                    
            </form>
            <button onClick={Logout}>Logout</button>
        </div>
        :navigate('/') 
  } 
                </>
    );
    }
    
export default Form;
