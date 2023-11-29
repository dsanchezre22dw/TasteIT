import React from 'react';

const Stats = ()=>{
    return(
      <section id="stats-counter" class="stats-counter">
        <div class="container" data-aos="zoom-out">

          <div class="row gy-4">

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="1048" data-purecounter-duration="1" class="purecounter"></span>
                <p>Recipes</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="344" data-purecounter-duration="1" class="purecounter"></span>
                <p>Users</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="1" class="purecounter"></span>
                <p>Chefs</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="24869" data-purecounter-duration="1" class="purecounter"></span>
                <p>Comments</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
}

export default Stats;