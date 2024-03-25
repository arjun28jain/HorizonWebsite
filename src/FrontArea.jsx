import React from 'react'
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';  
import './App.css'
import Navbar from './Navbar';
import logo from '../images/logo.png'

function scroll(targetid){
  document.getElementById(targetid).scrollIntoView({ behavior: 'smooth' });
}

const FrontArea = () => {
  return (
   <>
   <div className="frontarea">
    <Navbar/>
    
    {/*<div className="titledesc">Exploring Extremities and Beyond...</div>*/}
    <div className="title"> TEAM HORIZON</div>
       <img className="logo" src={logo}/> 

        <div className="menu">
        <Stack spacing={2} direction="row" >
      <Button variant="text" onClick={()=>scroll('home')}> <p className='buttontext'> HOME </p ></Button>
      <Button variant="text" onClick={()=>scroll('eventsmain')}><p className='buttontext'> EVENTS </p ></Button>
      <Button variant="text" onClick={()=>scroll('teamsmain')}><p className='buttontext'> TEAM </p ></Button>
      <Button variant="text" onClick={()=>scroll('contact')}><p className='buttontext'> CONTACT US </p ></Button>
      </Stack>
        </div>
           <span style={{ position:'relative', float:'right', right:'150px'}}>
            <button onClick={()=>scroll('wcdreg')} style={{padding:'10px', border: '3px solid #000',backgroundColor: 'orange',color: 'black',padding: '10px 20px',fontSize: '16px',fontWeight: 'bold',borderRadius: '5px',cursor: 'pointer',}} className='wcdbuttontext' > WILDCARD REGISTRATIONS '24 </button>
           </span>
        </div>   
   </>
  )
}

export default FrontArea