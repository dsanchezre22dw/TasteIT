import React from 'react';
import ChefsList from './ChefsList';
import SectionTitle from '../SectionTitle';

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