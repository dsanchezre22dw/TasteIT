import React from 'react';
import IconButton from '@/Components/IconButton';

export default function ChefsItem(props){
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="chef-member">
                <div className="member-img">
                    <img src={props.src} className="img-fluid" alt=""/>
                    <div className="social">
                        <IconButton href={`https://twitter.com/${props.href1}`} class="bi-twitter"/>
                        <IconButton href={`https://www.instagram.com/${props.href2}`} class="bi-facebook"/>
                        <IconButton href={`https://www.facebook.com/${props.href3}`} class="bi-instagram"/>
                    </div>
                </div>
                <div className="member-info">
                    <h4>{props.name}</h4>
                    <span>{props.restaurant}</span>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}