import React from 'react';
import FooterItemText from "./FooterItemText";
import FooterItemFollow from "./FooterItemFollow";

export default function FooterList(){
    return (
        <div className="row gy-3 mb-5">
            <FooterItemText classIcon="bi-geo-alt" contenth4="Address" contentp={<p>C. Jose Miguel Barandiaran, 10-12 <br/>Donostia, Gipuzkoa<br/></p>}/>
            <FooterItemText classIcon="bi-telephone" contenth4="Contact" contentp={<p><strong>Phone:</strong> +34 693 273 928<br/><strong>Email:</strong> contact@tasteitapp.com<br/></p>}/>
            <FooterItemText classIcon="bi-clock" contenth4="Availability" contentp={<p><strong>Mon-Sat: 11AM</strong> - 23PM<br/>Sunday: Closed</p>}/>
            <FooterItemFollow class="flex-column" contenth4="Follow Us" classDiv="social-links d-flex"/>
        </div>
    )

}