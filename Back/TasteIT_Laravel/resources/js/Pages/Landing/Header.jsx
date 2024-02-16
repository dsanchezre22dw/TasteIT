import React from 'react';
import { Link, Head } from '@inertiajs/react';
import ApplicationHorizontalLogo from '@/Components/ApplicationHorizontalLogo';

export default function Header({ auth, laravelVersion, phpVersion }) {
    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
        
            <a href={route('index')} className="logo d-flex align-items-center me-auto me-lg-0">
                <ApplicationHorizontalLogo/>
            </a>
        
            <div>
                <a className="" href={route('login')}>Login</a>
                <a className="btn-register" href={route('register')}>Register</a>
            </div>
        
            </div>
        </header>
    );
}
