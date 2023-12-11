import React from 'react';
import TestimonialsList from './TestimonialsList';

const Testimonials = ()=>{
    return(
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Testimonials</h2>
            <p>What Are They <span>Saying About Us</span></p>
          </div>

          <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
            <TestimonialsList />
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>
    );
}

export default Testimonials;