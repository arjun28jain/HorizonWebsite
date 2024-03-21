import React from 'react'

const Team = () => {
  return (
    <>

  <div  style={{height:'40px',width:'100vw',backgroundColor:'black', marginTop:'60px'}}> </div>

      <div style={{height:'200px',width:'100vw'}}>

        <p id='teamsmain' style={{fontWeight:'20px', fontSize:'65px', fontFamily:'Montserrat, sans-serif', textAlign:'center', 
           fontWeight:'500',marginTop:'55px'}}> 
            Our TEAM 
        </p>

        <p style={{fontFamily:'Montserrat, sans-serif',fontSize:'20px', textAlign:'center', fontWeight:'700', color:'orangered'}}> 
        Introducing our Team Members
        </p>
        <br/>
        <hr></hr>
        <br/>

      </div>

  <div className="fouthyear" style={{height:'1200px', width:'100vw', marginTop:'0px', marginBottom:'10px'}}>

        <p style={{fontWeight:'20px', fontSize:'50px', fontFamily:'Montserrat, sans-serif', textAlign:'center', 
         fontWeight:'500', position:'relative', top:'-30px'}}> Senior Coordinators</p>

        {/* HEAD IMAGES */}

      <div className="headimg" style={{height:'380px', width:'670px', position:'relative', top:'10px', left:'410px', display:'flex', alignItems:'flex-start', justifyContent:'center'}}>

        <div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

        <img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'80px', top:'-10px'}}/> 
        <p style={{position:'relative', top:'-2.5px' ,left:'110px', fontSize:'25px'}}> Mohd Omar Siddiqui <br/> <p style={{width:'210px', textAlign:'center'}}> HEAD </p> </p>
        <img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'200px', top:'8px'}}/>
      
        </div>

        <div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

        <img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'15px', top:'5px'}}/> 
        <p style={{position:'relative', top:'12px' ,left:'60px', fontSize:'25px'}}> Radhika Aggarwal <br/> <p style={{width:'190px', textAlign:'center'}}> HEAD </p></p>
        <img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'140px', top:'20px'}}/>
      
      </div>

    </div>
    <br/><br/>

         {/* HEAD IMAGES OVER */}

    <div className="noheadimg" style={{height:'380px', width:'1500px', position:'relative', top:'10px', left:'13px', display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'60px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'90px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'180px', top:'8px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'45px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'90px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'165px', top:'6px'}}/>
</div>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'35px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'65px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'160px', top:'5px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'20px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'70px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'150px', top:'6px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'05px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'50px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'130px', top:'6px'}}/>
</div>

</div>

<div className="noheadimg" style={{height:'380px', width:'1500px', position:'relative', top:'10px', left:'13px', display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'60px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'90px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'180px', top:'8px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'45px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'90px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'165px', top:'6px'}}/>
</div>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'35px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'65px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'160px', top:'5px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'20px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'70px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'150px', top:'6px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'05px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'50px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'130px', top:'6px'}}/>
</div>

</div>

       {/* NO HEAD IMAGES */}
       
        
  </div>

        {/* THIRD YEAR IMAGES */}


       <div className="thirdyear" style={{height:'1500px', width:'100vw', marginTop:'0px', marginBottom:'10px', position:'relative', top:'100px'}}>

        <p style={{fontWeight:'20px', fontSize:'50px', fontFamily:'Montserrat, sans-serif', textAlign:'center', 
         fontWeight:'500', position:'relative', top:'-30px'}}> Coordinators</p>

        {/* HEAD IMAGES */}

      <div className="headimg" style={{height:'380px', width:'670px', position:'relative', top:'10px', left:'410px', display:'flex', alignItems:'flex-start', justifyContent:'center'}}>

        <div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

        <img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'80px', top:'-10px'}}/> 
        <p style={{position:'relative', top:'-2.5px' ,left:'110px', fontSize:'25px'}}> Mohd Omar Siddiqui <br/> <p style={{width:'210px', textAlign:'center'}}> HEAD </p> </p>
        <img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'200px', top:'8px'}}/>
      
        </div>

        <div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

        <img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'15px', top:'5px'}}/> 
        <p style={{position:'relative', top:'12px' ,left:'60px', fontSize:'25px'}}> Radhika Aggarwal <br/> <p style={{width:'190px', textAlign:'center'}}> HEAD </p></p>
        <img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'140px', top:'20px'}}/>
      
      </div>

    </div>
    <br/><br/>

         {/* HEAD IMAGES OVER */}

    <div className="noheadimg" style={{height:'380px', width:'1500px', position:'relative', top:'10px', left:'13px', display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'60px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'90px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'180px', top:'8px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'45px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'90px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'165px', top:'6px'}}/>
</div>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'35px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'65px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'160px', top:'5px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'20px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'70px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'150px', top:'6px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'05px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'50px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'130px', top:'6px'}}/>
</div>

</div>

<div className="noheadimg" style={{height:'380px', width:'1500px', position:'relative', top:'10px', left:'13px', display:'flex', alignItems:'flex-start', justifyContent:'space-around'}}>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'60px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'90px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'180px', top:'8px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'45px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'90px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'165px', top:'6px'}}/>
</div>

<div style={{height:'330px', width:'350px', display:'flex', flexDirection:'column'}}> 

<img src="Mohd_Omar_Siddiqui_CSE.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'35px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-2.5px' ,left:'65px', fontSize:'25px'}}> Mohd Omar Siddiqui</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'160px', top:'5px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'20px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'70px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'150px', top:'6px'}}/>
</div>

<div style={{ height:'330px', width:'350px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center'}}> 

<img src="radhika_edited.jpg" alt="no pic" height='250px' width='250px' style={{border:'3px black solid', borderRadius:'50%',margin:'10px',position:'relative', left:'05px', top:'-10px'}}/> 
<p style={{position:'relative', top:'-3px' ,left:'50px', fontSize:'25px'}}> Radhika Aggarwal</p>
<img src='instagram.png' height='30px' width='30px' style={{position:'relative', left:'130px', top:'6px'}}/>
</div>

</div>

       {/* NO HEAD IMAGES */}
       
  </div>
    </>
  )
}

export default Team