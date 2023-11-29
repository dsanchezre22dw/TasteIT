import React from 'react';

const Footer = ()=>{
    return(
      <footer id="footer" class="footer">

        <div class="container">
          <div class="row gy-3">
            <div class="col-lg-3 col-md-6 d-flex">
              <i class="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  C. Jose Miguel Barandiaran, 10-12 <br/>
                  Donostia, Gipuzkoa<br/>
                </p>
              </div>
    
            </div>
    
            <div class="col-lg-3 col-md-6 footer-links d-flex">
              <i class="bi bi-telephone icon"></i>
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> +34 693 273 928<br/>
                  <strong>Email:</strong> contact@tasteitapp.com<br/>
                </p>
              </div>
            </div>
    
            <div class="col-lg-3 col-md-6 footer-links d-flex">
              <i class="bi bi-clock icon"></i>
              <div>
                <h4>Availability</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
    
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div class="social-links d-flex">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
    
          </div>
        </div>
    
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>TasteIT</span></strong>. All Rights Reserved
          </div>
    
        </div>
    
      </footer>
    );
}

export default Footer;