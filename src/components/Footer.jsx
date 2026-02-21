import React from 'react';
import { Link } from 'react-router-dom';
import emblem from '../assets/odisha-emblem.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <img src={emblem} alt="Odisha Emblem" className="footer-logo" />
          <h3>Collectorate Jharsuguda</h3>
          <p>Official Portal of Jharsuguda District Administration, Government of Odisha.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About District</Link></li>
            <li><Link to="/administration">Administration</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/whatsapp-service">WhatsApp Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Collectorate, NH 10, Jharsuguda Road,</p>
          <p>Bijju Nagar, Jharsuguda, Odisha 768204</p>
          <p>Phone: 06645-270070 / 8093178590</p>
          <p>Email: dm-jharsuguda@nic.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} District Administration, Jharsuguda. All rights reserved.</p>
        <p>Managed by Collectorate Jharsuguda & NIC.</p>
      </div>
    </footer>
  );
};

export default Footer;
