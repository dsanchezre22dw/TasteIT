import React from 'react';

export default function FooterItem(props){
    return (
        <div className={`col-lg-3 col-md-6 d-flex ${props.class}`}>
            {props.content}
            {props.contentDiv}

        </div>
    )
}