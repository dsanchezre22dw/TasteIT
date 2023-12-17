import React from 'react';

export default function TestimonialsItem(props){
    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                {props.text} 
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>{props.username}</h3>
                            <h4>{props.type}</h4>
                            <div className="stars">
                                <StarRating count={props.stars} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 text-center">
                        <img src={props.src} className="img-fluid testimonial-img" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StarRating({ count }) {
    const generateStars = () => {
      return Array.from({ length: count }, (_, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ));
    };
  
    return (generateStars());
}