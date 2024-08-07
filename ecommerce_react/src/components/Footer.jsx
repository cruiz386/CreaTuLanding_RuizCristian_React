import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/CreaTuLanding_RuizCristian/" className="footer-logo">
        <Logo 
          src="https://cruiz386.github.io/CreaTuLanding_RuizCristian/assets/logo/logo_fdo_bco.png" 
          alt="Logo CaSa footer blanco" 
        />
      </Link>
      <div className="footer-text">
        © 2024 CaSa Smart - by <a href="https://twitter.com/Cristian_Ruiz" target="_blank" rel="noopener noreferrer">@Cristian_Ruiz</a>
      </div>
    </footer>
  );
};

export default Footer;

