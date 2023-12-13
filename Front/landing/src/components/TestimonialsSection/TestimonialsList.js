import React from 'react';

import TestimonialsItem from "./TestimonialsItem";

export default function TestimonialsList(){
    return (
        <div className="swiper-wrapper">
            <TestimonialsItem text="TasteIT has revolutionized the way I approach cooking. The diverse recipes and vibrant community have turned my kitchen into a creative haven. I've discovered flavors I never knew existed!" username="Adriyum" type="Cook" src="assets/img/testimonials/testimonials-5.jpg" stars={1}/>
            <TestimonialsItem text="Being a part of TasteIT is like having a global kitchen at my fingertips. The recipes are inspiring, and the community makes cooking an interactive and enjoyable experience. Highly recommended for food enthusiasts!" username="lauszv" type="Cook" src="assets/img/testimonials/testimonials-6.jpg" stars={2}/>
            <TestimonialsItem text="TasteIT is my go-to culinary companion. From discovering unique recipes to connecting with fellow foodies, it's a delightful journey. The platform seamlessly blends technology with the art of cooking." username="CRIB" type="Cook" src="assets/img/testimonials/testimonials-7.jpg" stars={3}/>
            <TestimonialsItem text="As a home chef, TasteIT has elevated my skills and expanded my culinary horizons. The user-friendly interface, coupled with an active community, makes it the perfect platform for anyone passionate about good food and good company." username="Cgumar" type="Cook" src="assets/img/testimonials/testimonials-8.jpg" stars={4}/>
        </div>
    )

}