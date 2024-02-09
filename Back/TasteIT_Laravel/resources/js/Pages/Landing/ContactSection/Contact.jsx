import React, { useEffect, useRef } from 'react';
import ContactList from '@/Pages/Landing/ContactSection/ContactList';
import SectionTitle from '@/Pages/Landing/SectionTitle';

const Contact = () => {
    const mapRef = useRef(null);
    const MI_LATITUD = 43.327366;
    const MI_LONGITUD= -1.970511;
    const API_KEY= 'AIzaSyCbHhSXBWBwecBO8ibnmTIYTEsAID-a4wk';

    useEffect(() => {
        // Cargar el script de Google Maps API
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        googleMapScript.async = true;
        window.initMap = initMap; // función de inicialización del mapa
        document.body.appendChild(googleMapScript);

        return () => {
            document.body.removeChild(googleMapScript);
        };
    }, []);

    const initMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: MI_LATITUD, lng: MI_LONGITUD }, // Latitud y longitud de tu ubicación
            zoom: 15, // Nivel de zoom del mapa
        });

        // Puedes agregar marcadores, personalizar el mapa, etc.
        new window.google.maps.Marker({
            position: { lat: MI_LATITUD, lng: MI_LONGITUD },
            map,
            title: 'Ubicación',
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Contact" color="Need Help?" span="Contact Us" />

                <div className="mb-3" ref={mapRef} style={{ width: '100%', height: '350px' }} />

                <ContactList />

                <form action="" method="post" role="form" className="php-email-form p-3 p-md-4">
                    <div className="row">
                        <div className="col-xl-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-xl-6 form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
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
};

export default Contact;
