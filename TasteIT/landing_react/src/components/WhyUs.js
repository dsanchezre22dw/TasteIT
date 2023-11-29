import React from 'react';

const WhyUs = ()=>{
    return(
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">

          <div class="row gy-4">

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="why-box">
                <h3>Why Choose TasteIT?</h3>
                <p>
                  We are more than a recipe platform. We offer a unique culinary experience, celebrating diversity, inspiring creativity, and connecting a community passionate about food. 
                </p>
                <div class="text-center">
                  <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-8 d-flex align-items-center">
              <div class="row gy-4">

                <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-clipboard-data"></i>
                    <h4>Culinary Diversity</h4>
                    <p>Explore an endless array of flavors. From comforting classics to avant-garde creations, 
                      TasteIT takes you on a culinary journey that celebrates gastronomic diversity.</p>
                  </div>
                </div>

                <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                  <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-gem"></i>
                    <h4>Active Community</h4>
                    <p>Join a passionate community. Share, comment, and connect with home chefs and food enthusiasts worldwide. 
                      In TasteIT, food brings people together.</p>
                  </div>
                </div>

                <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                  <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-inboxes"></i>
                    <h4>Daily Inspiration</h4>
                    <p>Find inspiration for every meal. With fresh recipes, culinary trends, and unique tips, 
                      TasteIT is your daily source for culinary creativity.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    );
}

export default WhyUs;