import React from 'react';

const Chefs = ()=>{
    return(
      <section id="chefs" className="chefs section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Chefs</h2>
            <p>Our <span>Proffesional</span> Chefs</p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-4.jpg" className="img-fluid" alt=""/>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Karlos Arguiñano</h4>
                  <span>Restaurante Karlos Arguiñano</span>
                  <p>Renowned Spanish chef and TV personality. He is a culinary maestro blending a passion for cooking with infectious charisma. His engaging style and approachable recipes have made his cooking show a television staple in Spain.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-5.jpg" className="img-fluid" alt=""/>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Martín Berasategui</h4>
                  <span>Restaurante Martín Berasategui</span>
                  <p>Acclaimed Spanish chef. He is a culinary virtuoso renowned for his innovative approach to Basque cuisine. With multiple Michelin stars, his restaurants are gastronomic landmarks. Berasategui's culinary artistry reflects a commitment to excellence and a profound appreciation for fine dining.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="chef-member">
                <div className="member-img">
                  <img src="assets/img/chefs/chefs-6.jpg" className="img-fluid" alt=""/>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
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