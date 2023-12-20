import React from 'react';
import ContactList from '@/Pages/Landing/ContactSection/ContactList';
import SectionTitle from '@/Pages/Landing/SectionTitle';

const Contact = ()=>{
    return(
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <SectionTitle title="Contact" color="Need Help?" span="Contact Us"/>

          <div className="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4098577903555!2d-1.9724200238404082!3d43.326611871119496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e0!3m2!1ses!2ses!4v1701234138952!5m2!1ses!2ses" style={{ border: '0', width: '100%', height: '350px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <ContactList />

          <form action="" method="post" role="form" className="php-email-form p-3 p-md-4">
            <div className="row">
              <div className="col-xl-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="col-xl-6 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>

          </form>

        </div>
      </section>
    );
}

export default Contact;