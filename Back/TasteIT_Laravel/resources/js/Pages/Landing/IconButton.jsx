import React from 'react';
import Icon from "./Icon"

export default function IconButton(props){
    return (
        <a href={props.href} className={props.aclass}><Icon className={props.class}/></a>
    )
}