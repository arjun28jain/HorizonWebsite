import { Typography } from '@mui/joy'
import React from 'react'

const Events = () => {
  return (
  <>
  <div>
  <div className='eventsfront' style={{height:'200px', width:'100vw'}}>

   <p style={{fontWeight:'20px', fontSize:'70px', fontFamily:'Montserrat, sans-serif', textAlign:'center', 
    fontWeight:'500',marginTop:'25px'}}> 
    Our Events </p> 
    
    <p style={{fontFamily:'Montserrat, sans-serif',fontSize:'20px', textAlign:'center', fontWeight:'200', marginTop:'5px'}}> 
     Some of the Major Events Organised  
     by our team </p><br/>
     <hr></hr>
     </div>

      <div className="eventskiran" style={{height:'580px', width:'100vw', top:'60px',position:'relative', backgroundColor:'azure'}}>

          <p className='kirantext' style={{textAlign:'center', fontWeight:'20px', fontSize:'80px', fontFamily:'Montserrat, sans-serif',textAlign:'center',fontWeight:'500', color:'orangered'}}>KIRAN </p> <p className="kirandesc" style={{fontFamily:'Montserrat, sans-serif',fontSize:'25px', textAlign:'center', 
           fontWeight:'400'}}> The Antiragging Drive</p>

          <img src="_DSC9571.jpg" className='kiranhover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="DSC_5757.jpg" className='kiranhover' alt="" style={{width:'520px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="DSC_5793.jpg" className='kiranhover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>   
          
            </div>

              <div className="eventsdisha" style={{height:'600px', width:'100vw', 
               top:'60px',position:'relative',backgroundColor:'azure'}}>

          <p className='dishatext' style={{textAlign:'center', fontWeight:'20px', fontSize:'80px', fontFamily:'Montserrat, sans-serif',textAlign:'center',fontWeight:'500', color:'cornflowerblue'}}>DISHA </p> <p className="dishadesc" style= 
           {{fontFamily:'Montserrat, sans-serif',fontSize:'25px', textAlign:'center', 
           fontWeight:'400'}}> The Induction Program</p>
           
          <img src="_DSC9571.jpg" className='dishahover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="disha.png" className='dishahover' alt="" style={{width:'520px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="DSC_5793.jpg" className='dishahover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>   
          
            </div>

            <div className="eventscrolls" style={{height:'600px', width:'100vw', 
               top:'60px',position:'relative',backgroundColor:'azure'}}>

          <p className='scrollstext' style={{textAlign:'center', fontWeight:'20px', fontSize:'80px', fontFamily:'Montserrat, sans-serif',textAlign:'center',fontWeight:'500', color:'black'}}>SCROLLS </p> <p className="scrollsdesc" style= 
           {{fontFamily:'Montserrat, sans-serif',fontSize:'25px', textAlign:'center', 
           fontWeight:'400'}}> Students Creative Oratory Learning Skills ​</p>
           
          <img src="scrollsimg2.jpg" className='scrollshover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="scrollsimg1.jpg" className='scrollshover' alt="" style={{width:'520px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="scrollsimg2.jpg" className='scrollshover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>   

            </div>
      
            <div className="eventfreshers" style={{height:'495px', width:'100vw', 
               top:'60px',position:'relative',backgroundColor:'azure'}}>

          <p className='freshersstext' style={{textAlign:'center', fontWeight:'20px', fontSize:'80px', fontFamily:'Montserrat, sans-serif',textAlign:'center',fontWeight:'500', color:'purple'}}>FRESHERS</p> <p className="freshersdesc" style= 
           {{fontFamily:'Montserrat, sans-serif',fontSize:'25px', textAlign:'center', 
           fontWeight:'400'}}> The Annual Freshers Party ​</p>
           
          <img src="scrollsimg2.jpg" className='fresherhover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="scrollsimg1.jpg" className='fresherhover' alt="" style={{width:'520px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>
          <img src="scrollsimg2.jpg" className='fresherhover' alt="" style={{width:'500px',height:'350px', marginTop:'20px',marginLeft:'2px', marginRight:'2px'}}/>   

            </div>

     </div>
     
  </>
  )
}

export default Events