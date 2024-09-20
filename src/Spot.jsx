import React from 'react';
import img1 from './img14.jpg';
import img2 from './img16.jpg';
function Spot() {
  return (
    <div class="card"  style={{border:"none",marginTop:"40px",marginBottom:"40px",backgroundImage: `url(${img2})`,  
    backgroundSize: "cover",  
    backgroundPosition: "center", marginLeft:"40px" ,marginRight:"40px"}}>
    <div class="card-body"  style={{ display: "flex", alignItems: "center",justifyContent:"space-around",border:"none"}}>

                <div style={{ flex: 1, marginRight: "150px" ,textAlign:"left"}} >
                <h3 class="card-title" id='cursive'>Wonderful Gift</h3>
                <h2 class="card-title">A PERFECT SPOT</h2>
                <p class="card-text" style={{color:"grey"}}>With supporting text below as a natural lead-in to additional 
                    content. The <br />point of using Lorem Ipsum is that it has a more-or-less normal 
                   -less normal <br/>distribution.Various versions have evolved</p>
                <a href="#" class="btn btn-primary" style={{color:"black",backgroundColor:"white",borderBlockColor:"black",borderRadius:"0px",borderWidth:"2px"}}>READ MORE</a>
                </div>

                <div  class="card-body" style={{ flex: 1}} >
                <img src={img1} alt="Description of image" style={{ width: "100%", maxWidth: "600px", height: "auto" }} />
                </div>
    </div>

    

</div>

  );
}

export default Spot;
