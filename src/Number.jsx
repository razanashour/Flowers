import React from 'react';
import img1 from './img12.jpg';

function Number() {
  return (
    <div
      className='numbersrow'
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "10px",
        backgroundImage: `url(${img1})`,  
        backgroundSize: "cover",  
        backgroundPosition: "center",  
        padding: "20px",  
        color: "white", 
        textAlign: "center",  paddingBottom:"60px",
        paddingTop:"80px",marginLeft:"40px",marginRight:"40px"
      }}
    >
      <div>
        <h4>86</h4>
        <p>BLOG POST</p>
      </div>

      <div>
        <h4>25</h4>
        <p>HAPPY CLIENTS</p>
      </div>

      <div>
        <h4>17</h4>
        <p>FLOWER SORTS</p>
      </div>

      <div>
        <h4>98</h4>
        <p>WEB AWARDS</p>
      </div>
    </div>
  );
}

export default Number;
