import React from 'react';
import WhyUsList from './WhyUsList';

const WhyUs = ()=>{
    return(
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="why-box">
                <h3>Why Choose TasteIT?</h3>
                <p>
                  We are more than a recipe platform. We offer a unique culinary experience, celebrating diversity, inspiring creativity, and connecting a community passionate about food. 
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 d-flex align-items-center">
              <WhyUsList />
            </div>

          </div>

        </div>
      </section>
    );
}

export default WhyUs;