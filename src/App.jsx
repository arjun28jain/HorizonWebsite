import React from 'react'
import './App.css'
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';
import CenterArea from './CenterArea';
import LowerArea from './LowerArea';
import Herofooter from './Herofooter';

const App = () => {
  return (
    <>
    <div className="frontarea">
    <div className="title">HORIZON</div>
    {/*} <div className="collegetitle">Ajay Kumar Garg <br/>Engineering College</div> */}
    <div className="titledesc">Exploring Extremities and Beyond...</div>
    <div className="navbar">
      <div className="logoarea">
        
       <img className="logo" src="logo.png"/> 
        </div>  


        <div className="menu">

        <Stack spacing={2}>
        <ButtonGroup aria-label="plain button group" color='black' size='lg' spacing="0.4 rem">
        <Button className='buttoncolor'>HOME</Button>
        <Button className='buttoncolor'>EVENTS</Button> 
        <Button className='buttoncolor'>TEAM</Button>
        <Button className='buttoncolor'>CONTACT US</Button>
        </ButtonGroup>
        </Stack>
        </div>


        <div className="hamburger">
           
        </div>
      </div>
    </div>

      <CenterArea/>
      <LowerArea/>
      <Herofooter/>


    </>
  )
}

export default App