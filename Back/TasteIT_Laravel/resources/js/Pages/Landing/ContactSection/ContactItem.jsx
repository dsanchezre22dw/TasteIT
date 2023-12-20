import React from 'react';

export default function ContactItem(props){
    return (
        <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
                <i className={`icon bi flex-shrink-0 ${props.class}`}></i>
                <div>
                    <h3>{props.name}</h3>
                    {props.desc}
                </div>
            </div>
        </div>
    )
}