import React from 'react';
import './App.css';
import img1 from './img15.jpg'; // Import the image here
import './Girls.css';


function Orange() {
  return (
    <div id="carouselExample" class="carousel slide" style={{marginLeft:"40px",marginRight:"40px"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <div className="carousel-caption">
              <h4  id='cursive' >Testimonials</h4>
              <h3>AN EXPERIENCE DELIVERED</h3><br/>
              <p>Welcome to Rosebud, where every bouquet tells a story and every blossom adds a touch of magic to your day.
                </p>
                <br/><br/>
                
            </div>
</div>
  );
}

export default Orange;
 