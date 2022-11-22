import React from 'react';
import logo from '../img/pondrLogo.png';
import '../styles.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <header className='navBar'>
                <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <img class="navbar-nav me-auto mb-2 mb-lg-0" className='logo' src={logo} />
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link"  id='links' to="/product">Product</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" id='links' to="/pricing">Pricing</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" id='links' to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                    <button class="btn btn-outline-primary ms-auto" className='button'>Get the free Chrome Extension</button>
                    </div>
                </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;