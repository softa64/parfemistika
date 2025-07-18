import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Modal from '../components/Modal';
import '../PlacanjePage.css';

import bocaImg from '../assets/boca.png';
import korisnikIcon from '../assets/korisnik.png';
import creditCardIcon from '../assets/credit-card.png';
import paypalIcon from '../assets/paypal.png';
import applePayIcon from '../assets/apple-pay.png';
import trustIcon from '../assets/trust.png';
import trashIconImg from '../assets/trash.png';


const PlacanjePage = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [shippingMethod, setShippingMethod] = useState(10);

    if (cartItems.length === 0) {
        return (
            <div className="payment-page-container empty-cart">
                <h2>Nema proizvoda za naplatu.</h2>
                <Link to="/dizajn" className="checkout-btn">Započni dizajn</Link>
            </div>
        );
    }
    
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + shippingMethod;

    const handleFinishPurchase = () => {
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        clearCart();
        navigate('/');
    };

    return (
        <>
            <div className="payment-page-container">
                <div className="payment-page-header">
                    <Link to="/korpa" className="back-link">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                        Povratak nazad
                    </Link>
                    <h1>Plaćanje</h1>
                </div>

                <div className="payment-grid">
                    {/* LEVA KOLONA */}
                    <div className="payment-details-col">
                        <div className="payment-card">
                            <div className="card-header">
                                <img src={korisnikIcon} alt="Korisnik" className="header-icon" />
                                <h3>Korisnik</h3>
                                <a href="#" className="change-link">Promijeni adresu</a>
                            </div>
                            <div className="user-info">
                                <div><p>Email</p><span>softa@gmail.com</span></div>
                                <div><p>Adresa</p><span>Ha******* 32</span></div>
                                <div><p>Mobilni</p><span>+387 61*****</span></div>
                            </div>
                        </div>

                        <div className="payment-card">
                            <h3>Detalji dostave</h3>
                            {cartItems.map(item => (
                                <div key={item.id} className="delivery-item-card">
                                    <img src={bocaImg} alt="Parfem" />
                                    <div className="item-info">
                                        <h4>Parfem</h4>
                                        <p>{item.name}</p>
                                        <p>{item.quantity} x 33 ML</p>
                                        <p>Dostava: 2-4 dana</p>
                                    </div>
                                    <div className="item-price">{(item.price * item.quantity).toFixed(2)} KM</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="payment-summary-col">
                         <div className="payment-card">
                            <h3>Ukupno</h3>
                            <div className="summary-line">
                                <span>Artikli u korpi</span>
                                <span>{subtotal.toFixed(2)} KM</span>
                            </div>
                            <div className="summary-line">
                                <span>Dostava</span>
                                <span>{shippingMethod.toFixed(2)} KM</span>
                            </div>
                            <hr />
                            <div className="summary-total">
                                <span>Ukupno</span>
                                <span>{total.toFixed(2)} KM</span>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="payment-options">
                    <div className="payment-card">
                        <h3>Plaćanje</h3>
                        <div className="radio-option">
                            <input type="radio" id="card" name="payment" value="card" defaultChecked/>
                            <label htmlFor="card">
                                <span>Debitna / Kreditna kartica</span>
                                <img src={creditCardIcon} alt="Kartica" className="payment-icon" />
                            </label>
                            <div className="card-form">
                                <input type="text" placeholder="1234 5678 9876 5432" />
                                <div className="card-form-row">
                                    <input type="text" placeholder="MM / YY" />
                                    <input type="text" placeholder="CVC 3 cifre" />
                                </div>
                                <input type="text" placeholder="Ime vlasnika kartice" />
                                <div className="trust-badge">
                                    <img src={trustIcon} alt="Sigurno" />
                                    <span>Sve transakcije su sigurne i šifrirane</span>
                                </div>
                            </div>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="paypal" name="payment" value="paypal" />
                            <label htmlFor="paypal">
                                <span>PayPal</span>
                                <img src={paypalIcon} alt="PayPal" className="payment-icon" />
                            </label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="applepay" name="payment" value="applepay" />
                            <label htmlFor="applepay">
                                <span>ApplePay</span>
                                <img src={applePayIcon} alt="ApplePay" className="payment-icon" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="finish-purchase-section">
                    <button className="checkout-btn" onClick={handleFinishPurchase}>ZAVRŠI KUPOVINU</button>
                    <p>Klikom na "Završi kupovinu" potvrđujem da sam dužan platiti narudžbu.<br />Prihvatam Uslove i odredbe i potvrđujem da sam pročitao Politiku privatnosti.</p>
                </div>
            </div>

            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <h2>Uspješno ste kupili parfem!</h2>
                <button className="checkout-btn" onClick={handleCloseModal}>
                    Vrati me na početak
                </button>
            </Modal>
        </>
    );
};

export default PlacanjePage;