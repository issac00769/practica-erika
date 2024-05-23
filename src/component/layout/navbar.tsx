// src/Navbar.js
import React from 'react';
import './css/Navbar.css'; // Importa el archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Gamix...</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/search"><FontAwesomeIcon icon={faSearch} /></a></li>
                <li><a href="/shop"><FontAwesomeIcon icon={faShoppingBag} /></a></li>
                <li><a href="/profile"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
