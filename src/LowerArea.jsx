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

        
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='designtext'> DESIGNING </Typography>
        <p className='designdesc'>
         Designing, an intricate and multifaceted process, embodies the artful convergence of creativity, functionality, and 
         aesthetic finesse. It is the meticulous orchestration of ideas, materials, and technologies, aimed at crafting 
         innovative solutions to complex problems. Designing transcends mere ornamentation, delving deep into the realms of form and function.
        </p>
        <img className='designimg' src="designimg2.jpg"/>

        <img className='writingimg' src="writingimg.jpg"/>
        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='writingtext'> WRITING </Typography>
        <p className='writingdesc'>
        Writing is a multifaceted communicative art form, wherein individuals meticulously encode their thoughts, emotions, and 
         ideas into a structured and coherent textual composition. It serves as a vehicle for the meticulous arrangement of 
          linguistic elements, encompassing vocabulary, syntax, and rhetoric, to convey nuanced messages.
        </p>

        <Typography color='whitesmoke' fontSize='50px'fontFamily='sans-serif' className='arttext'> ART </Typography>
        <p className='artdesc'>
        Art, in its quintessence, embodies the intricate interplay of human creativity, manifested through a myriad of mediums, 
         transcending mere aesthetics to evoke profound emotional and intellectual responses. Rooted in profound cultural, 
          historical, and philosophical contexts.
        </p>
        <img className='artimg' src="artimg.jpg"/>

        </div>
       

    </div>

   
  )
}

export default LowerArea