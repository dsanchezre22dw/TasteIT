import React from 'react';

const Header = ()=>{
    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
        
            <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                <img src="assets/img/logoHorizontal.png" alt="TasteIT logo" title="TasteIT logo"/>
            </a>
        
            <div>
                <a className="" href={route('login')}>Login</a>
                <a className="btn-register" href={route('register')}>Register</a>
            </div>
        
            </div>
        </header>
    );
}

export default Header;