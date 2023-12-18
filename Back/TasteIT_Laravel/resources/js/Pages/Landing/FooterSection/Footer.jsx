import React from 'react';
import FooterList from '@/Pages/Landing/FooterSection/FooterList';

const Footer = ()=>{
    return(
      <footer id="footer" className="footer">

        <div className="container">
          <FooterList />
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