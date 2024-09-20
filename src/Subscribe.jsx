import React from 'react';
import './App.css';
import img1 from './img21.jpg';
import img2 from './img22.jpg';
import img3 from './img23.jpg';
import img4 from './img24.jpg';
function Subscribe() {
  return (
   <div className='subscribe' style={{backgroundColor:"rgb(244, 221, 225)",marginRight:"40px",marginLeft:"40px"}}>
    <div className='flowers' style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <img src={img1} style={{width:"359px"}}/>
        <img src={img2} style={{width:"359px"}}/>
        <img src={img3} style={{width:"359px"}}/>
        <img src={img4} style={{width:"359px"}}/>
    </div>
    <h5 style={{textAlign:"center",paddingTop:"50px"}}>SUBSCRIBE TO OUR WEEKLY NEWSLETTER </h5>
    <form style={{paddingLeft:"400px",paddingBottom:"50px",paddingTop:"30px"}}>
        <input type='text' placeholder='Your E-mail Adress' style={{height:"40px",width:"500px",border:"none"}}></input>
        <button style={{height:"40px",backgroundColor:"black",color:"white",border:"none"}}>SEND MESSAGE</button>
    </form>
   </div>
  );
}

export default Subscribe;
