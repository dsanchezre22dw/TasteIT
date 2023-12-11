import React from 'react';

const Testimonials = ()=>{
    return(
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Testimonials</h2>
            <p>What Are They <span>Saying About Us</span></p>
          </div>

          <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          TasteIT has revolutionized the way I approach cooking. The diverse recipes and vibrant community have turned my kitchen into a creative haven. I've discovered flavors I never knew existed!
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Adriyum</h3>
                        <h4>Cook</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          Being a part of TasteIT is like having a global kitchen at my fingertips. The recipes are inspiring, and the community makes cooking an interactive and enjoyable experience. Highly recommended for food enthusiasts!
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>lauszv</h3>
                        <h4>Cook</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-6.jpg" className="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          TasteIT is my go-to culinary companion. From discovering unique recipes to connecting with fellow foodies, it's a delightful journey. The platform seamlessly blends technology with the art of cooking.
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>CRIB</h3>
                        <h4>Cook</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-7.jpg" className="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          As a home chef, TasteIT has elevated my skills and expanded my culinary horizons. The user-friendly interface, coupled with an active community, makes it the perfect platform for anyone passionate about good food and good company.
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Cgumar</h3>
                        <h4>Cook</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-8.jpg" className="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>
    );
}

export default Testimonials;