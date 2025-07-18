import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="app-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Kontaktirajte nas</h4>
            <p><a href="mailto:parfemistika@gmail.com">email: parfemistika@gmail.com</a></p>
            <p><a href="tel:062-871-821">tel: 062-871-821</a></p>
          </div>
          <div className="footer-column">
            <h4>Trebate pomoć?</h4>
            <ul>
              <li><a href="#">Način plaćanja</a></li>
              <li><a href="#">Dostava</a></li>
              <li><a href="#">Garancija kvalitete</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Informacije</h4>
            <ul>
              <li><a href="#">Kako naručiti?</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <div className="footer-copyright">
            <span>Parfemistika © {new Date().getFullYear()}</span>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;