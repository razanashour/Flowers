import React from 'react';
import './App.css';
import img1 from './img12.jpg';
import './Home.css';
import img2 from './img05.png';
import img3 from './img06.png';
import img4 from './img07.png';
import Gift from './Gift';
import Number from './Number';
import Girls from './Girls';
import Subscribe from './Subscribe';
import Orange from './Orange';
import Footer from './Footer';
import Spot from './Spot';
import img10 from './img04.png';
function Home() {
  return (
    <>
    <div className="carousel-container">

    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand" href="#">
      <img src={img10} style={{ width: "100px" }} alt="Logo" />
    </a>

    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ alignItems: "left" }}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Add ms-auto here */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PAGES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ELEMENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" style={{ width: "40px" }} height="20" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-justify" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Carousel */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." style={{ height: '600px',margin: '0 auto',marginBottom:"60px"}} />
            <div className="carousel-caption">
              <h2  id='cursive'>Welcome to Rosebud</h2>
              <h1 style={{fontSize:"3rem",fontFamily:"unset"}}>TIME TO BLOSSOM</h1><br/>
              <p>Welcome to Rosebud, where every bouquet tells a story and every blossom adds a touch of magic to your day.
                </p>
                <br/><br/>
                <button style={{height:"45px",margin:"10px",width:"120px"}}>Read More</button>
                <button style={{height:"45px",backgroundColor:"transparent",color:"#fff",borderBlockColor:"#fff",width:"120px"}}>Read More</button>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  
  <div id='cards'>
    <div id='card' class="card" style={{border:"none"}} >
  <img src={img2} class="card-img-top" alt="..." style={{width:"40px"}}/>
  <div class="card-body">
    <h6 class="card-text">READY TO BE IMPRESSED</h6>
    <p class="card-text">Lorem ipsum dolor sit amet,consectetur  elit,<br/>  sed do eiusmod  </p>
  </div>
</div>


<div class="card" style={{border:"none"}} >
  <img src={img3} class="card-img-top" alt="..." style={{width:"40px"}}/>
  <div class="card-body">
    <h6 class="card-text">READY TO BE IMPRESSED</h6>
    <p class="card-text">Lorem ipsum dolor sit amet,consectetur  elit,<br/>  sed do eiusmod </p>
  </div>
</div>




<div class="card" style={{border:"none"}} >
  <img src={img4} class="card-img-top" alt="..." style={{width:"40px"}}/>
  <div class="card-body">
    <h6 class="card-text">READY TO BE IMPRESSED</h6>
    <p class="card-text">Lorem ipsum dolor sit amet,consectetur  elit,<br/>  sed do eiusmod  </p>
  </div>
</div>
</div>

<Gift/>
<Number/>
<Spot/>
<Orange/>
<Girls/>
<Subscribe/>
<Footer/>
  </>

  );
}

export default Home;
