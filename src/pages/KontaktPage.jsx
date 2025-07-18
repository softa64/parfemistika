import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../KontaktPage.css';
import Modal from '../components/Modal';

import mapaImg from '../assets/mapa.png';

const KontaktPage = () => {
    const [formData, setFormData] = useState({ ime: '', email: '', poruka: '' });
    const [formStatus, setFormStatus] = useState('idle');
    const [showModal, setShowModal] = useState(false);

    const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setShowModal(true);
            setFormData({ ime: '', email: '', poruka: '' });
        }, 2000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({ ime: '', email: '', poruka: '' });
    }

    return (
        <>
        <div className="kontakt-page-container">
            <section className="contact-intro">
                <h1>Stupite u kontakt sa nama</h1>
                <p>Imate pitanje, prijedlog ili samo želite da se javite? Popunite formu ispod i naš tim će Vam se javiti u najkraćem mogućem roku.</p>
            </section>

            <section ref={formRef} className={`contact-main-section ${formInView ? 'visible' : ''}`}>
                <div className="contact-form-wrapper">
                    <h3>Pošaljite nam poruku</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="ime">Ime i prezime</label>
                            <input type="text" id="ime" name="ime" value={formData.ime} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email adresa</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="poruka">Vaša poruka</label>
                            <textarea id="poruka" name="poruka" rows="6" value={formData.poruka} onChange={handleChange} required></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={formStatus === 'submitting'}>
                            {formStatus === 'submitting' ? 'Slanje...' : 'Pošalji poruku'}
                        </button>
                    </form>
                </div>

                <div className="contact-info-wrapper">
                    <h3>Kontakt informacije</h3>
                    <div className="info-item">
                        <h4>Email</h4>
                        <p><a href="mailto:parfemistika@gmail.com">parfemistika@gmail.com</a></p>
                    </div>
                    <div className="info-item">
                        <h4>Telefon</h4>
                        <p><a href="tel:+38762871821">+387 62 871 821</a></p>
                    </div>
                    <div className="info-item">
                        <h4>Adresa</h4>
                        <p>Kolodvorska 12, 71000 Sarajevo, BiH</p>
                    </div>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                    </div>
                </div>
            </section>

            <section ref={mapRef} className={`map-section ${mapInView ? 'visible' : ''}`}>
                <img src={mapaImg} alt="Lokacija Parfemistike" />
            </section>
        </div>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
                <h2>Uspješno ste nas kontaktirali!</h2>
                <p style={{ color: '#a0a0a0', marginBottom: '30px' }}>Hvala Vam na poruci. Odgovorićemo u najkraćem mogućem roku.</p>
                <button className="submit-btn" onClick={handleCloseModal}>
                    Zatvori
                </button>
            </Modal>
        </>
    
    );
};

export default KontaktPage;