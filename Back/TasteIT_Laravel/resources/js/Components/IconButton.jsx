import React from 'react';
import Icon from '@/Components/Icon';

export default function IconButton({ href, aclass, class: iconClass, children }) {
    return (
        <a href={href} className={aclass}>
            <Icon class={iconClass} />
            {children}
        </a>
    )
}
