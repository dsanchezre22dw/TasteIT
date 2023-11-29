import React from 'react';

const Chefs = ()=>{
    return(
      <section id="chefs" class="chefs section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Chefs</h2>
            <p>Our <span>Proffesional</span> Chefs</p>
          </div>

          <div class="row gy-4">

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="chef-member">
                <div class="member-img">
                  <img src="assets/img/chefs/chefs-4.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Karlos Arguiñano</h4>
                  <span>Restaurante Karlos Arguiñano</span>
                  <p>Renowned Spanish chef and TV personality. He is a culinary maestro blending a passion for cooking with infectious charisma. His engaging style and approachable recipes have made his cooking show a television staple in Spain.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="chef-member">
                <div class="member-img">
                  <img src="assets/img/chefs/chefs-5.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Martín Berasategui</h4>
                  <span>Restaurante Martín Berasategui</span>
                  <p>Acclaimed Spanish chef. He is a culinary virtuoso renowned for his innovative approach to Basque cuisine. With multiple Michelin stars, his restaurants are gastronomic landmarks. Berasategui's culinary artistry reflects a commitment to excellence and a profound appreciation for fine dining.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div class="chef-member">
                <div class="member-img">
                  <img src="assets/img/chefs/chefs-6.jpg" class="img-fluid" alt=""/>
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Gordon Ramsay</h4>
                  <span>Restaurant Gordon Ramsay</span>
                  <p>Fiery and iconic British chef. He is a culinary force to be reckoned with. Renowned for his Michelin-starred restaurants and TV shows, Ramsay's dynamic personality and high standards have made him a global culinary icon. His passion for perfection and no-nonsense approach define his unparalleled success in the culinary world.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
}

export default Chefs;