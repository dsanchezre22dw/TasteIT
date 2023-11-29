import React from 'react';

const About = ()=>{
    return(
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>About Us</h2>
            <p>Learn More <span>About Us</span></p>
          </div>

          <div class="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: 'url(assets/img/about-4.jpg)', backgroundSize: 'cover' }} data-aos="fade-up" data-aos-delay="150">              <div class="call-us position-absolute">
                <h4>Contact Us</h4>
                <div class="text-center"><a href="#contact"><button type="submit">Send Message</button></a></div>
              </div>
            </div>
            <div class="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
              <div class="content ps-0 ps-lg-5">
                <p class="fst-italic">
                  TasteIT is an online community designed for cuisine and gastronomy lovers. Here, the users will: 
                </p>
                <ul>
                  <li><i class="bi bi-check2-all"></i> Create, see and share recipes with other users.</li>
                  <li><i class="bi bi-check2-all"></i> Make your own shopping list to not forget anything.</li>
                  <li><i class="bi bi-check2-all"></i> Register your refrigerator to always consider what food you have available.</li>
                  <li><i class="bi bi-check2-all"></i> Follow other users to always be aware of their creations.</li>
                </ul>
                <p>
                  In TasteIT, we not only share recipes; we share stories, traditions and moments around food. This platform unites amateur chefs, 
                  foodies and lovers of good food, promoting interaction and collaboration.
                </p>

                <div class="position-relative mt-4">
                  <img src="assets/img/about-2.jpg" class="img-fluid" alt=""/>
                  <a href="https://www.youtube.com/watch?v=b1DC4TxeSdE" class="glightbox play-btn"></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}

export default About;