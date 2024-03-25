import React from 'react';
import './style.css'
import logo from '../images/logo.png'
import Typography from '@mui/joy/Typography';


const Form = () => {
  return (
    <>
    <center id='wcdreg'> <Typography level="h1" color='white' fontSize='40px'> WILDCARD REGISTRATION '24</Typography> </center> <br/>
    <div  style={{ display:'flex', justifyContent:'center'}}> 
    <div className="container">
      <form method="post" action="https://script.google.com/macros/s/AKfycbzeaGZ7Hx1ceACWokhBexeLqOdtdK3NQW-hoklFINs/dev" name="contact-form">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={logo} height="40px" width="40px" style={{ position: 'relative', left: '-8px' }} />
          <span style={{ color: 'rgb(214, 156, 41)', fontSize: 'small', textDecoration: 'double', position: 'relative', top: '14px', left: '-8px' }}> Team HORIZON</span>
        </div>

        <h4 > WILDCARD REGISTRATION </h4> <br />

        <input type="text" name="your-name" placeholder="Name" style={{ height: '14px', width: '300px' }} />
        <input type="text" name="your-number" placeholder="Number" style={{ height: '14px', width: '300px' }} />
        <input type="email" name="your-email" placeholder="Email" style={{ height: '14px', width: '300px' }} />
        <textarea name="message" rows="3" placeholder="Your Description"></textarea>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
           
          <h3 style={{ color: 'rgb(255, 255, 255)', textDecorationLine: 'underline', margin: '10px', marginBottom:'18px', marginTop:'20px' }}>DOMAINS</h3>
          <span style={{ color: 'rgb(139, 165, 188)', fontSize: 'small', position: 'relative', top: '23px' }}>[May select more than one]</span>
        </div>

        <input type="checkbox" name="oratory" id="oratory" style={{ height: '13px', width: '13px' }} />
        <label htmlFor="oratory" style={{ color: 'rgb(214, 156, 41)', fontSize: 'small' }}> ORATORY</label><br />
        <input type="checkbox" name="writing" id="writing" style={{ height: '13px', width: '13px' }} />
        <label htmlFor="writing" style={{ color: 'rgb(214, 156, 41)', fontSize: 'small' }}> WRITING</label><br />
        <input type="checkbox" name="design" id="design" style={{ height: '13px', width: '13px' }} />
        <label htmlFor="design" style={{ color: 'rgb(214, 156, 41)', fontSize: 'small' }}> DESIGNING</label><br />
        <input type="checkbox" name="art" id="art" style={{ height: '13px', width: '13px' }} />
        <label htmlFor="art" style={{ color: 'rgb(214, 156, 41)', fontSize: 'small' }}> ART </label><br />

        <input type="submit" value="submit" id="submit"/>
      </form>
    
      <br/>
    </div>
    
    </div>
    </>
  );
};

export default Form;
