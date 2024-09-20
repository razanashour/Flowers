import React from 'react';
import './App.css';
import Home from './Home';
import img8 from './img08.jpg'
import img9 from './img09.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'

import './gift.css';
function Gift() {
  return (
   <>
   <br></br><br></br>
   <div className='all'>
            <h6 id='cursive'>Wonderful Gift</h6>
            <h4>OUR WONDERFUL ARRANGEMENTS</h4>
            <br></br>
            <div className='cards' >
                          
                      <div class="card" id='cardi'  >
                      <img src={img8} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h6>ORANGE SILK</h6>
                        <p class="card-text">$330</p>
                      </div>
                    </div>
                    <div class="card" id='cardi'>
                      <img src={img9} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h6>DARK FOREST</h6>
                        <p class="card-text">$250</p>
                      </div>
                    </div>
                    <div class="card" id='cardi'>
                      <img src={img10} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h6>PEARL ROSES</h6>
                        <p class="card-text">$110</p>
                      </div>
                    </div>
                    <div class="card" id='cardi' >
                      <img src={img11} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h6>RUSTIC DECORE</h6>
                        <p class="card-text">$350</p>
                      </div>
                    </div>
          </div>



</div>
   </>
  );
}

export default Gift;