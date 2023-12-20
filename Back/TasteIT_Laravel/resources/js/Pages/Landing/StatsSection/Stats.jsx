import React from 'react';
import StatsList from '@/Pages/Landing/StatsSection/StatsList';

const Stats = ()=>{
    return(
      <section id="stats-counter" className="stats-counter">
        <div className="container" data-aos="zoom-out">

          <StatsList />

        </div>
      </section>
    );
}

export default Stats;