import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import profil from '../assets/profil.png';
import korpa from '../assets/korpa.png';

const navItems = [
    { name: "Početna", path: "/" },
    { name: "Dizajn", path: "/dizajn" },
    { name: "Kviz", path: "/kviz" },
    { name: "O Nama", path: "/onama" },
    { name: "Kontakt", path: "/kontakt" }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="app-container header-content">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="Parfemistika Logo" />
                </Link>

                <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.path} className={({ isActive }) => isActive ? "active" : ""}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                <Link to="/auth">
                  <img src={profil} alt="Profil" />
                </Link>
                    <Link to="/korpa">
                      <img src={korpa} alt="Korpa" />
                    </Link>
                </div>
                
                <button className={`hamburger-menu ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;