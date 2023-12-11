import React from 'react';

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
              <div className="row gy-4">

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data"></i>
                    <h4>Culinary Diversity</h4>
                    <p>Explore an endless array of flavors. From comforting classNameics to avant-garde creations, 
                      TasteIT takes you on a culinary journey that celebrates gastronomic diversity.</p>
                  </div>
                </div>

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem"></i>
                    <h4>Active Community</h4>
                    <p>Join a passionate community. Share, comment, and connect with home chefs and food enthusiasts worldwide. 
                      In TasteIT, food brings people together.</p>
                  </div>
                </div>

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes"></i>
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