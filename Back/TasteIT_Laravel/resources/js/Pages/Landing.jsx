import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import About from '@/Pages/Landing/About';
import Chefs from '@/Pages/Landing/ChefsSection/Chefs';
import Contact from '@/Pages/Landing/ContactSection/Contact';
import Footer from '@/Pages/Landing/FooterSection/Footer';
import Functionalities from '@/Pages/Landing/FunctionalitiesSection/Functionalities';
import Gallery from '@/Pages/Landing/Gallery';
import Header from '@/Pages/Landing/Header';
import Hero from '@/Pages/Landing/Hero';
import Stats from '@/Pages/Landing/StatsSection/Stats';
import Testimonials from '@/Pages/Landing/TestimonialsSection/Testimonials';
import WhyUs from '@/Pages/Landing/WhyUsSection/WhyUs';

import '../../css/landing.css'


export default function Landing({ }) {


    return (
        <>
        <Head title="Landing TasteIT" />
        <Header/>
        <Hero/>
        <main id="main">
          <About/>
          <Functionalities/>
          <Gallery/>
          <WhyUs/>
          <Stats/>
          <Testimonials/>
          <Chefs/>
          <Contact/>
        </main>
        <Footer/>
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        <div id="preloader"></div>
        </>
      );
}