import React from 'react';
import ChefsList from '@/Pages/Landing/ChefsSection/ChefsList';
import SectionTitle from '@/Pages/Landing/SectionTitle';

const Chefs = ()=>{
    return(
      <section id="chefs" className="chefs section-bg">
        <div className="container" data-aos="fade-up">

          <SectionTitle title="Chefs" color="Our" span="Proffesional Chefs"/>

          <ChefsList />

        </div>
      </section>
    );
}

export default Chefs;