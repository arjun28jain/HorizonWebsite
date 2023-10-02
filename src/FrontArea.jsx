import React from 'react'
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';
import './App.css'
import Navbar from './Navbar';


const FrontArea = () => {
  return (
   <>
   <div className="frontarea">
    <Navbar/>
    
    {/*<div className="titledesc">Exploring Extremities and Beyond...</div>*/}
    <div className="title"> TEAM HORIZON</div>
       <img className="logo" src="logo.png"/> 

        <div className="menu">
        <Stack spacing={2} direction="row" >
      <Button variant="text"> <p className='buttontext'> HOME </p ></Button>
      <Button variant="text"><p className='buttontext'> EVENTS </p ></Button>
      <Button variant="text"><p className='buttontext'> TEAM </p ></Button>
      <Button variant="text"><p className='buttontext'> CONTACT US </p ></Button>
      </Stack>
        </div>
           
        </div>   
   </>
  )
}

export default FrontArea