import React from 'react';

const Contact = ()=>{
    return(
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Contact</h2>
            <p>Need Help? <span>Contact Us</span></p>
          </div>

          <div class="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4098577903555!2d-1.9724200238404082!3d43.326611871119496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1701234138952!5m2!1ses!2ses" style={{ border: '0', width: '100%', height: '350px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class="row gy-4">

            <div class="col-md-6">
              <div class="info-item  d-flex align-items-center">
                <i class="icon bi bi-map flex-shrink-0"></i>
                <div>
                  <h3>Our Address</h3>
                  <p>C. Jose Miguel Barandiaran, 10-12</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="info-item d-flex align-items-center">
                <i class="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@tasteitapp.com</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="info-item  d-flex align-items-center">
                <i class="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+34 693 273 928</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="info-item  d-flex align-items-center">
                <i class="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3>Availability</h3>
                  <div><strong>Mon-Sat:</strong> 11AM - 23PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>

          </div>

          <form action="" method="post" role="form" class="php-email-form p-3 p-md-4">
            <div class="row">
              <div class="col-xl-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="col-xl-6 form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>

          </form>

        </div>
      </section>
    );
}

export default Contact;