import React from 'react';

const Functionalities = ()=>{
    return(
      <section id="functionalities" class="functionalities section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Functionalities</h2>
            <p>What can <span>you do?</span></p>
          </div>

          <div class="row gy-4">
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="150">
              <img id="movil_silueta" src="assets/img/movil_silueta2.png" alt="app" title="app"/>
            </div>
            <div class="col-lg-7 d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
              <div class="content_functionalities ps-0 ps-lg-5">
                <div class="functionality d-flex">
                  <img id="func1" src="assets/img/recipes2.png" alt="recipes" title="recipes" width="20%"/>
                  <div style={{ textAlign: 'center' }} class="name_functionality">
                    <h3>Recipes</h3>
                    <p>There are more than 1000 recipes available for you.</p>
                  </div>
                </div>
                  
                <div class="functionality d-flex">
                  <img id="func2" src="assets/img/shopping_list.png" alt="shopping list" title="shopping list" width="20%"/>
                  <div style={{ textAlign: 'center' }} class="name_functionality">
                    <h3>Shopping list</h3>
                    <p>You can make your own shopping list to never forget to buy your food.</p>
                  </div>
                </div>
                  
                <div class="functionality d-flex">
                  <img id="func3" src="assets/img/frigorifico.png" alt="frigorifico" title="frigorifico" width="20%"/> 
                  <div style={{ textAlign: 'center' }} class="name_functionality">
                    <h3>Inventory</h3>
                    <p>You can register all the food you have available</p>
                  </div>
                </div>

                <div class="functionality d-flex">
                  <img id="func4" src="assets/img/users.png" alt="users" title="users" width="20%"/> 
                  <div style={{ textAlign: 'center' }} class="name_functionality">
                    <h3>Users</h3>
                    <p>There are more than 1000 recipes available for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}

export default Functionalities;