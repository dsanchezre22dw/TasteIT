import React from 'react';
import TestimonialsList from '@/Pages/Landing/TestimonialsSection/TestimonialsList';
import SectionTitle from '@/Pages/Landing/SectionTitle';

const Testimonials = ()=>{
    return(
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

          <SectionTitle title="Testimonials" color="What Are They" span="Saying About Us?"/>

          <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
            <TestimonialsList />
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>
    );
}

export default Testimonials;