import React from 'react';
import FooterItem from '@/Pages/Landing/FooterSection/FooterItem';
import Icon from '@/Pages/Landing/Icon';

export default function FooterItemText(props){
    return (
        <FooterItem class="" content={<Icon class={`icon ${props.classIcon}`}/>} contentDiv={<div><h4>{props.contenth4}</h4>{props.contentp}</div>}/>
    )
}
