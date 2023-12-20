import React from 'react';
import FunctionalityList from '@/Pages/Landing/FunctionalitiesSection/FunctionalityList';
import SectionTitle from '@/Pages/Landing/SectionTitle';

const Functionalities = ()=>{
    return(
      <section id="functionalities" className="functionalities">
        <div className="container" data-aos="fade-up">

          <SectionTitle title="Functionalities" color="What can" span="you do?"/>

          <div className="row gy-4">
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="150">
              <img id="movil_silueta" src="assets/img/movil_silueta2.png" alt="app" title="app"/>
            </div>
            <div className="col-lg-7 d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
              <FunctionalityList />
            </div>
          </div>

        </div>
      </section>
    );
}

export default Functionalities;