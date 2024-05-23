import React from 'react';
import { FaTwitch, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import './css/Footer.css'; // Asegúrate de crear un archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="footer-logo">GAMIX.</h1>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero officiis rem
            consectetur sunt cupiditate eius obcaecati, culpa, aspernatur aperiam id.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitch"><FaTwitch /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Site Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tournaments</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Useful Links</h3>
          <ul>
            <li><a href="#">Create Account</a></li>
            <li><a href="#">Subscription</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Site Condition</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Information</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Site Maps</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2021-2030 - Developed by. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
