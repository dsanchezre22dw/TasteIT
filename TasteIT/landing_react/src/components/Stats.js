import React from 'react';

const Stats = ()=>{
    return(
      <section id="stats-counter" className="stats-counter">
        <div className="container" data-aos="zoom-out">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1048" data-purecounter-duration="1" className="purecounter"></span>
                <p>Recipes</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="344" data-purecounter-duration="1" className="purecounter"></span>
                <p>Users</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="1" className="purecounter"></span>
                <p>Chefs</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="24869" data-purecounter-duration="1" className="purecounter"></span>
                <p>Comments</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
}

export default Stats;