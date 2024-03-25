import React from 'react'
import Typography from '@mui/joy/Typography';
import './App.css'
import logo from '../images/logo.png'

const CenterArea = () => {
  return (
    <>
    
    <div className="centerarea" id='home'>
     <center> <Typography level="h1" color='white' fontSize='50px'>Bridging Innovation and Leadership</Typography> </center>
 
        <div className="logocontent">

        <img className='desclogo' src={logo }/>
        <div className="maindesc">
        <h4>
        <p className='orangetext'>Team Horizon is a dynamic and innovative techno-managerial society at AKGEC. Established with a 
        vision to foster creativity, leadership, and a passion for technology, we serve as a hub for students to explore the 
        intersection of cutting-edge technology and effective management. Our journey is fueled by curiosity and a relentless 
        pursuit of excellence.</p><br/><br/>

        <p className='blacktext'>A group of passionate individuals, with a vast compass of beliefs, flairs, and an outlook, 
            waiting to be realized 
            at a confluence called Horizon.Coming together, to embolden the cognizance 
            of oneself, in everyone who collaborates with us. Because that's what exploring extremities is all about; 
            within, and beyond. </p>
        </h4> 
        </div>
       
      
   
    
       
    </div>

    </div>

    </>
  )
}

export default CenterArea



