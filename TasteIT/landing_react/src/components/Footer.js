import React from 'react';

const Footer = ()=>{
    return(
      <footer id="footer" className="footer">

        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  C. Jose Miguel Barandiaran, 10-12 <br/>
                  Donostia, Gipuzkoa<br/>
                </p>
              </div>
    
            </div>
    
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> +34 693 273 928<br/>
                  <strong>Email:</strong> contact@tasteitapp.com<br/>
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Availability</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
    
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
    
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>TasteIT</span></strong>. All Rights Reserved
          </div>
    
        </div>
    
      </footer>
    );
}

export default Footer;