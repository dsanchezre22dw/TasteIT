import React from 'react';
import ContactItem from '@/Pages/Landing/ContactSection/ContactItem';

export default function ContactList(){
    return (
        <div className="row gy-4">
            <ContactItem class="bi-map" name="Our Address" desc={<p>C. Jose Miguel Barandiaran, 10-12</p>}/>
            <ContactItem class="bi-envelope" name="Email Us" desc={<p>contact@tasteitapp.com</p>}/>
            <ContactItem class="bi-telephone" name="Call Us" desc={<p>+34 693 273 928</p>}/>
            <ContactItem class="bi-share" name="Availability" desc={<div><strong>Mon-Sat:</strong> 11AM - 23PM<br/><strong>Sunday:</strong> Closed</div>}/>
        </div>
    )

}