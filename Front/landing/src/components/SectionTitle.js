import React from 'react';

export default function SectionTitle(props){
    return (
        <div class="section-header">
            <h2>{props.title}</h2>
            <p>{props.color} <span>{props.span}</span></p>
        </div>
    )
}