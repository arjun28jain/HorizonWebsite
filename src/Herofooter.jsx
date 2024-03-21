import { Typography } from '@mui/material'
import React from 'react'

const Herofooter = () => {
  return (
    <div className="herofooter" id='contact'>
        <div className="firstherofooter">
            <Typography fontSize='40px' color='whitesmoke' className='logofootercontent'> Team Horizon</Typography>            
            <a href='https://www.instagram.com/p/Cxm_nEyyAzQ/' className='footerlogo'><img src="instagram.png" height='40px' 
             width='40px'/></a>
            <img src="facebook.png" height='40px' width='40px' className='fblogo'/>
            <p className='emailfooter'>horizon.akgec.official@gmail.com</p>
        </div>
        <div className="reachus">
            <p className='reachus'> Ajay Kumar Garg Engineering College, 27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, 
             Uttar Pradesh 201015 <br/> </p>
        </div>
    </div>

  )
}

export default Herofooter