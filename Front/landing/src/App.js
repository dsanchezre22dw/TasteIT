import React from 'react';
import About from './components/About';
import Chefs from './components/ChefsSection/Chefs';
import Contact from './components/ContactSection/Contact';
import Footer from './components/FooterSection/Footer';
import Functionalities from './components/FunctionalitiesSection/Functionalities';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/StatsSection/Stats';
import Testimonials from './components/TestimonialsSection/Testimonials';
import WhyUs from './components/WhyUsSection/WhyUs';


function App() {
  return (
    <>
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

export default App;
