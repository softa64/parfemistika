import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../AuthPage.css';

const AuthPage = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const switchModeHandler = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsLoginMode(prevMode => !prevMode);
            setIsAnimating(false);
        }, 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Forma poslata!");
    };

    return (
        <div className="auth-page-container">
            <div className={`auth-card ${isAnimating ? 'animating' : ''}`}>
                <div className="auth-form-container">
                    <h2>{isLoginMode ? 'Prijava' : 'Registracija'}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLoginMode && (
                             <div className="input-group">
                                <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                <input type="text" placeholder="Ime i prezime" required />
                            </div>
                        )}
                        <div className="input-group">
                            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <input type="email" placeholder="Email adresa" required />
                        </div>
                        <div className="input-group">
                            <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                            <input type="password" placeholder="Lozinka" required />
                        </div>
                        
                        {isLoginMode && (
                             <Link to="#" className="forgot-password">Zaboravili ste lozinku?</Link>
                        )}

                        <button type="submit" className="auth-btn">
                            {isLoginMode ? 'Prijavi se' : 'Registruj se'}
                        </button>
                    </form>
                    <p className="auth-switcher">
                        {isLoginMode ? 'Nemate nalog?' : 'Već imate nalog?'}
                        <button onClick={switchModeHandler}>
                            {isLoginMode ? 'Registrujte se' : 'Prijavite se'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;