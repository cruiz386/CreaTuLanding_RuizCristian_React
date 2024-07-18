import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-center">
      
  
      <Link to="/CreaTuLanding_RuizCristian/">
        <Logo 
          src="./src/assets/logo/logo_fdo_bco.png" 
          alt="Logo CaSa footer blanco" 
          style={{ width: "50px", borderRadius: "30%", borderStyle: 'groove', margin:"20px" }}  
        />
      </Link>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 CaSa Smart -  by @Cristian_Ruiz
        
      </div>
    </footer>
  );
};

export default Footer;
