import React from 'react'
import './App.css'
import { Typography } from '@mui/material'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';


const LowerArea = () => {
  return (

    <div className='lowerarea'>
        <Typography color='white' fontSize='50px' align='center' className='textdomain'>DOMAINS</Typography>

        <div className="domains">
        
        <img className='micimg' src="micimgfour.jpg"/>
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='oratorytext'> ORATORY </Typography>
        <p className='oratorydesc'>
        Oratory, the art of eloquence and persuasive discourse, transcends mere speech, elevating language to a sublime form of 
        expression. A virtuosic amalgamation of rhetoric and persuasion, oratory is the embodiment of linguistic finesse, 
        captivating audiences with its mellifluous cadence and profound diction.
        </p>

        <img className='micimg' src="micimgfour.jpg"/>
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='oratorytext'> DESIGNING </Typography>
        <p className='oratorydesc'>
        Oratory, the art of eloquence and persuasive discourse, transcends mere speech, elevating language to a sublime form of 
        expression. A virtuosic amalgamation of rhetoric and persuasion, oratory is the embodiment of linguistic finesse, 
        captivating audiences with its mellifluous cadence and profound diction.
        </p>

        <img className='micimg' src="micimgfour.jpg"/>
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='oratorytext'> WRITING </Typography>
        <p className='oratorydesc'>
        Oratory, the art of eloquence and persuasive discourse, transcends mere speech, elevating language to a sublime form of 
        expression. A virtuosic amalgamation of rhetoric and persuasion, oratory is the embodiment of linguistic finesse, 
        captivating audiences with its mellifluous cadence and profound diction.
        </p>

        <img className='micimg' src="micimgfour.jpg"/>
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='oratorytext'> ART </Typography>
        <p className='oratorydesc'>
        Oratory, the art of eloquence and persuasive discourse, transcends mere speech, elevating language to a sublime form of 
        expression. A virtuosic amalgamation of rhetoric and persuasion, oratory is the embodiment of linguistic finesse, 
        captivating audiences with its mellifluous cadence and profound diction.
        </p>

        </div>
       

    </div>

   
  )
}

export default LowerArea