import React from 'react';
import FooterItem from '@/Pages/Landing/FooterSection/FooterItem';
import IconButton from '@/Pages/Landing/IconButton';

export default function FooterItemFollow(props){
    return (
        <FooterItem class={props.class} content={<h4>{props.contenth4}</h4>} contentDiv={<div className={props.classDiv}><IconButton href="#" class="bi-twitter"/><IconButton href="#" class="bi-facebook"/><IconButton href="#" class="bi-instagram"/><IconButton href="#" class="bi-linkedin"/></div>}/>
    )
}