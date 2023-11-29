import React from 'react';

const Header = ()=>{
    return(
        <header id="header" class="header fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
        
            <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
                <img src="assets/img/logoHorizontal.png" alt="TasteIT logo" title="TasteIT logo"/>
            </a>
        
            <div>
                <a class="" href="#">Login</a>
                <a class="btn-register" href="#">Register</a>
            </div>
        
            </div>
        </header>
    );
}

export default Header;