import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../KorpaPage.css';

import bocaImg from '../assets/boca.png';
import trashIconImg from '../assets/trash.png';

const KorpaPage = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page-container empty-cart">
                <h2>Tvoja korpa je prazna.</h2>
                <Link to="/dizajn" className="checkout-btn">Kreiraj svoj parfem</Link>
            </div>
        );
    }
    
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-page-container">
            <div className="cart-header">
                <Link to="/dizajn" className="back-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                    Povratak nazad
                </Link>
                <h1>Tvoja korpa</h1>
            </div>

            <div className="cart-grid">
                <div className="cart-items-list">
                    <h3>Vaša narudžba</h3>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item-card">
                            <img src={bocaImg} alt="Parfem" className="cart-item-image" />
                            <div className="cart-item-details">
                                <h4>Parfem</h4>
                                <p>{item.name}</p>
                                <p>33 ML</p>
                                <p>Dostava: 2-4 dana</p>
                            </div>
                            <div className="cart-item-actions">
                            <div className="quantity-selector">
                                    <button onClick={() => decrementQuantity(item.id)} className="quantity-btn">-</button>
                                    <span className="quantity-display">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)} className="quantity-btn">+</button>
                                </div>
                                <span className="item-price">{item.price.toFixed(2)} KM</span>
                                <button onClick={() => removeFromCart(item.id)} className="delete-btn">
                                    <img src={trashIconImg} alt="Ukloni" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Ukupno</h3>
                    {cartItems.map(item => (
                        <div key={item.id} className="summary-line">
                            <span>{item.name} ({item.quantity}x)</span>
                            <span>{(item.price * item.quantity).toFixed(2)} KM</span>
                        </div>
                    ))}
                    <hr />
                    <div className="summary-total">
                        <span>Ukupno</span>
                        <span>{total.toFixed(2)} KM</span>
                    </div>
                    <Link to="/placanje" className="checkout-btn">IDI NA NAPLATU</Link>
                </div>
            </div>
        </div>
    );
};

export default KorpaPage;