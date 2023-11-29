import React from 'react';

const Testimonials = ()=>{
    return(
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Testimonials</h2>
            <p>What Are They <span>Saying About Us</span></p>
          </div>

          <div class="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          TasteIT has revolutionized the way I approach cooking. The diverse recipes and vibrant community have turned my kitchen into a creative haven. I've discovered flavors I never knew existed!
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Adriyum</h3>
                        <h4>Cook</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-5.jpg" class="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          Being a part of TasteIT is like having a global kitchen at my fingertips. The recipes are inspiring, and the community makes cooking an interactive and enjoyable experience. Highly recommended for food enthusiasts!
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>lauszv</h3>
                        <h4>Cook</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-6.jpg" class="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          TasteIT is my go-to culinary companion. From discovering unique recipes to connecting with fellow foodies, it's a delightful journey. The platform seamlessly blends technology with the art of cooking.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>CRIB</h3>
                        <h4>Cook</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-7.jpg" class="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                      <div class="testimonial-content">
                        <p>
                          <i class="bi bi-quote quote-icon-left"></i>
                          As a home chef, TasteIT has elevated my skills and expanded my culinary horizons. The user-friendly interface, coupled with an active community, makes it the perfect platform for anyone passionate about good food and good company.
                          <i class="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>Cgumar</h3>
                        <h4>Cook</h4>
                        <div class="stars">
                          <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-2 text-center">
                      <img src="assets/img/testimonials/testimonials-8.jpg" class="img-fluid testimonial-img" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </section>
    );
}

export default Testimonials;