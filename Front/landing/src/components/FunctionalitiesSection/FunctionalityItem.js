import React from 'react';

export default function FunctionalityItem(props){
    return (
        <div className="functionality d-flex">
            <img src={props.src} alt="functionality" title="functionality" width="20%"/>
            <div style={{ textAlign: 'center' }} className="name_functionality">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}