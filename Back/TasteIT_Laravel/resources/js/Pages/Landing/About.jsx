import React from 'react';
import SectionTitle from './SectionTitle';

const About = ()=>{
    return(
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <SectionTitle title="About Us" color="What is" span="Taste IT?"/>

          <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: 'url(assets/img/landing/about-4.jpg)', backgroundSize: 'cover' }} data-aos="fade-up" data-aos-delay="150">              <div className="call-us position-absolute">
                <h4>Contact Us</h4>
                <div className="text-center"><a href="#contact"><button type="submit">Send Message</button></a></div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  TasteIT is an online community designed for cuisine and gastronomy lovers. Here, the users will: 
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Create, see and share recipes with other users.</li>
                  <li><i className="bi bi-check2-all"></i> Make your own shopping list to not forget anything.</li>
                  <li><i className="bi bi-check2-all"></i> Register your refrigerator to always consider what food you have available.</li>
                  <li><i className="bi bi-check2-all"></i> Follow other users to always be aware of their creations.</li>
                </ul>
                <p>
                  In TasteIT, we not only share recipes; we share stories, traditions and moments around food. This platform unites amateur chefs, 
                  foodies and lovers of good food, promoting interaction and collaboration.
                </p>

                <div className="position-relative mt-4">
                  <img src="assets/img/landing/about-2.jpg" className="img-fluid" alt=""/>
                  <a href="https://www.youtube.com/watch?v=b1DC4TxeSdE" className="glightbox play-btn"></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}

export default About;