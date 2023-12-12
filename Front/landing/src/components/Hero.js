import React from 'react';
import IconButton from './IconButton';

const Hero = ()=>{
    return(
      <section id="hero" className="hero d-flex align-items-center section-bg-half">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up">Create, share,<br/>enjoy</h2>
            <p data-aos="fade-up" data-aos-delay="100">Share unforgettable culinary moments, where every recipe is a story to tell.</p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="btn-register">Register</a>
              <a href="https://www.youtube.com/watch?v=b1DC4TxeSdE" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              <IconButton href="https://www.youtube.com/watch?v=b1DC4TxeSdE"/>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src="assets/img/hero-img.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Hero;