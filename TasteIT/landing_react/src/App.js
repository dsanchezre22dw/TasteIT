import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Chefs from './components/Chefs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Functionalities from './components/Functionalities';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';



function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <main id="main">
      <About/>
      <Functionalities/>
      <WhyUs/>
      <Stats/>
      <Gallery/>
      <Testimonials/>
      <Chefs/>
      <Contact/>
    </main>
    <Footer/>
    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    <div id="preloader"></div>
    </>
  );
}

export default App;
